import dispatcher from '../dispatcher/dispatcher'
import {
    FETCHING_STARTUP_DATA,
    RETRIEVED_STARTUP_DATA
} from './constants.js'
import {
    saveCurrentUsername,
    saveCurrentAdminStatus
} from './userActionCreators.js'

export function fetchStartupData() {
    debugger
    dispatcher.dispatch({type: FETCHING_STARTUP_DATA})
    setTimeout(() => {
        saveCurrentUsername('Connor Moody')
        saveCurrentAdminStatus(true)
    }, 4000)
}
