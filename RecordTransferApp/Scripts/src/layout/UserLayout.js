import React from 'react'
import UserStore from '../stores/userStore.js'

export const UserLayout = React.createClass({
    getInitialState() {
        return {
            currentUser: ''
        }
    },

    updateCurrentUser() {
        this.setState({
            currentUser: UserStore.getCurrentUser()
        })
    },

    componentWillMount() {
        UserStore.on('change', this.updateCurrentUser)
    },

    componentWillUnmount() {
        UserStore.removeListener('change', this.updateCurrentUser)
    },

    render() {
        return (
            <div className='userLayout'>
                <div>{`Hello ${this.state.currentUser}`}</div>
            </div>
        )
    }
})
