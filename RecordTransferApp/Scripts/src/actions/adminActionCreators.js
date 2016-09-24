import dispatcher from '../dispatcher/dispatcher'
import { CACHE_ADMIN_PENDING_RECORDS } from './constants.js'

export function cacheAdminPendingRecords(records) {
    dispatcher.dispatch({
        type: CACHE_ADMIN_PENDING_RECORDS,
        records
    })
}
