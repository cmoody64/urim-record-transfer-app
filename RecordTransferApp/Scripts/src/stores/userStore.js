import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/dispatcher'
import {
    CACHE_USERNAME,
    CACHE_ADMIN_STATUS,
    POST_USER_PERMISSON_ERROR,
    CLEAR_USER_PERMISSION_ERROR,
    CACHE_USER_PENDING_RECORDS,
    CACHE_USER_RECORDS_AWAITING_REVIEW
} from '../actions/constants'

// private data that will not be exposed through the adminStore singleton
let _currentUser = ""
let _isAdmin = false
let _userPermissionError = false
const _userPendingRecords = []  // holds records that are pending user action (need user review)
const _userRecordsAwaitingReview = [] // holds records that are pending admin action (awaiting admin approval)


// public api
const UserStore = Object.assign({}, EventEmitter.prototype, {
    getCurrentUser() {
        return _currentUser
    },

    isAdminLoggedIn() {
        return _isAdmin
    },

    isUserPermissionError() {
        return _userPermissionError
    },

    getUserPendingRecords() {
        return _userPendingRecords
    },

    getUserRecordsAwaitingReview() {
        return _userRecordsAwaitingReview
    },

    handleActions(action) {
        switch(action.type) {
            case CACHE_USERNAME:
                _currentUser = action.username
                this.emit('change')
                break
            case CACHE_ADMIN_STATUS:
                _isAdmin = action.adminStatus
                this.emit('change')
                break
            case POST_USER_PERMISSON_ERROR:
                _userPermissionError = true
                this.emit('change')
                break
            case CLEAR_USER_PERMISSION_ERROR:
                _userPermissionError = false
                this.emit('change')
                break
            case CACHE_USER_PENDING_RECORDS:
                _userPendingRecords.push(...action.records)
                this.emit('change')
                break
            case CACHE_USER_RECORDS_AWAITING_REVIEW:
                _userRecordsAwaitingReview.push(...action.records)
                this.emit('change')
                break
        }
    }
})

// when dispatcher calls handle actions, the calling context won't be Number store unless it is bound
dispatcher.register(UserStore.handleActions.bind(UserStore))

export default UserStore
