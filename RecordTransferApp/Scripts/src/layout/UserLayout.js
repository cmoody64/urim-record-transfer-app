import React from 'react'
import UserStore from '../stores/userStore.js'
import { RecordsList } from '../components/RecordsList.js'

export const UserLayout = React.createClass({
    getInitialState() {
        return {
            currentUser: UserStore.getCurrentUser(),
            pendingRecords: UserStore.getUserPendingRecords(),
            recordsAwaitingReview: UserStore.getUserRecordsAwaitingReview()
        }
    },

    updateComponent() {
        this.setState({
            currentUser: UserStore.getCurrentUser(),
            pendingRecords: UserStore.getUserPendingRecords(),
            recordsAwaitingReview: UserStore.getUserRecordsAwaitingReview()
        })
    },

    componentWillMount() {
        UserStore.on('change', this.updateComponent.bind(this))
    },

    componentWillUnmount() {
        UserStore.removeListener('change', this.updateComponent.bind(this))
    },

    render() {
        return (
            <div className='userLayout'>
                <div>{`Hello ${this.state.currentUser}`}</div>
                <div className='recordsListContainer'>
                    <RecordsList records={this.state.pendingRecords} style='warning' />
                </div>
                <div className='recordsListContainer'>
                    <RecordsList records={this.state.recordsAwaitingReview} style='info' />
                </div>
            </div>
        )
    }
})
