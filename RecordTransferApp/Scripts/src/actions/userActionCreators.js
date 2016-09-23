import dispatcher from '../dispatcher/dispatcher'
import {
    SAVE_USERNAME,
    SAVE_ADMIN_STATUS,
    POST_USER_PERMISSON_ERROR,
    CLEAR_USER_PERMISSION_ERROR
} from './constants.js'

export function saveCurrentUsername(username) {
    dispatcher.dispatch({
        type: SAVE_USERNAME,
        username
    })
}

export function saveCurrentAdminStatus(adminStatus) {
    dispatcher.dispatch({
        type: SAVE_ADMIN_STATUS,
        adminStatus
    })
}

export function postUserPermissionError() {
    dispatcher.dispatch({
        type: POST_USER_PERMISSON_ERROR
    })
}

export function clearUserPermissionError() {
    dispatcher.dispatch({
        type: CLEAR_USER_PERMISSION_ERROR
    })
}
