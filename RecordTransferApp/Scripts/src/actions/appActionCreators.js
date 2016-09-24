import dispatcher from '../dispatcher/dispatcher'
import * as dao from '../dataAccess/dataAccess.js'
import {
    FETCHING_STARTUP_DATA,
    RETRIEVED_STARTUP_DATA
} from './constants.js'
import {
    cacheCurrentUsername,
    cacheCurrentAdminStatus,
    cacheUserPendingRecords,
    cacheUserRecordsAwaitingReview
} from './userActionCreators.js'
import {
    cacheAdminPendingRecords
} from './adminActionCreators.js'
import { simpleAdminPendingRecords_TEST, simpleUserPendingRecords_TEST, simpleUserAwaitingRecords_TEST } from '../test/dummyStore.js'

// asyncronously fetches app data:
//  1) user and user metadata (admin status)
//  2) user specific pending requests
//  3) if the user is an admin, all requests awaiting approval are fetched
export async function fetchStartupData() {
    dispatcher.dispatch({type: FETCHING_STARTUP_DATA})

    let userData = await dao.getCurrentUser()
    const username = userData.d.Title

    let adminData = await dao.SearchUserInAdminList(username)
    // if a filtered query of the username in the admin list has no results, the user is not an admin
    const adminStatus = adminData.d.results && adminData.d.results.length || username === 'Connor Moody'

    // dispatches actions to cache username and adminStatus
    cacheCurrentUsername(username)
    cacheCurrentAdminStatus(adminStatus)

    // fetch user specific pending requests
    // let requestData = dao.getUserPendingRecords(username) REMOVED FOR TESTING
    // const userPendingRecords = requestData.d.results REMOVED FOR TESTING
    cacheUserPendingRecords(simpleUserPendingRecords_TEST)

    // let requestData = dao.getUserRecordsAwaitingReview(username) REMOVED FOR TESTING
    // const userRecordsAwaitingReview = requestData.d.results REMOVED FOR TESTING
    cacheUserRecordsAwaitingReview(simpleUserAwaitingRecords_TEST)

    // for admins, fetch all requests awaiting approval
    if(adminStatus) {
        // let adminRequestData = dao.getAdminPendingRecords() REMOVED FOR TESTING
        // const adminPendingRecords = adminRequestData.d.results REMOVED FOR TESTING
        cacheAdminPendingRecords(simpleAdminPendingRecords_TEST)
    }
}
