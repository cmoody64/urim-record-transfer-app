import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/dispatcher.js'
import { CACHE_ADMIN_PENDING_RECORDS } from '../actions/constants.js'

// private data that will not be exposed through the adminStore singleton
let _adminPendingRecords = []

// public api
const AdminStore = Object.assign({}, EventEmitter.prototype, {
    getAdminPendingRecords() {
        return _adminPendingRecords
    },

    handleActions(action) {
        switch(action.type) {
            case CACHE_ADMIN_PENDING_RECORDS:
                _adminPendingRecords.push(...action.records)
                this.emit('change')
                break
        }
    }
})

dispatcher.register(AdminStore.handleActions.bind(AdminStore))

export default AdminStore
