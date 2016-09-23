import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/dispatcher'
import {
    SAVE_USERNAME,
    SAVE_ADMIN_STATUS,
    POST_USER_PERMISSON_ERROR,
    CLEAR_USER_PERMISSION_ERROR
} from '../actions/constants'

// private data that will not be exposed through the numberStore singleton
let _currentUser = ""
let _isAdmin = false
let _userPermissionError = false


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

    handleActions(action) {
        switch(action.type) {
            case SAVE_USERNAME:
                _currentUser = action.username
                this.emit('change')
                break
            case SAVE_ADMIN_STATUS:
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
        }
    }
})

// when dispatcher calls handle actions, the calling context won't be Number store unless it is bound
dispatcher.register(UserStore.handleActions.bind(UserStore))

export default UserStore
