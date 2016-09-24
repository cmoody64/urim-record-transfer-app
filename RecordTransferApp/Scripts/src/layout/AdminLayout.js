import React from 'react'
import AdminStore from '../stores/adminStore.js'
import { RecordsList } from '../components/RecordsList.js'

export const AdminLayout = React.createClass({
    getInitialState() {
        return {pendingRecords: AdminStore.getAdminPendingRecords()}
    },

    updateComponent() {
        this.setState({
            pendingRecords: AdminStore.getAdminPendingRecords()
        })
    },

    componentWillMount() {
        AdminStore.on('change', this.updateComponent.bind(this))
    },

    componentWillUnmount() {
        AdminStore.removeListener('change', this.updateComponent.bind(this))
    },

    render() {
        return (
          <div className='adminLayout'>
              <div>ADMIN TITLE</div>
              <div className='recordsListContainer'>
                  <RecordsList records={this.state.pendingRecords} style='info' />
              </div>
          </div>
        )
    }
})
