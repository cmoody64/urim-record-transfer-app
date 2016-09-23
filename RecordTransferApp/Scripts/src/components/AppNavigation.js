import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { postUserPermissionError } from '../actions/userActionCreators.js'

const handleSelect = (eventKey, props) => {
    switch(eventKey) {
        case 1:
            props.router.push('/')
            break
        case 2:
            props.isAdminLoggedIn ? props.router.push('admin') : postUserPermissionError()
            break
        case 3:
            console.log('routing to settings')
            break
    }
}

export const AppNavigation = (props) => (
    <Nav bsStyle='tabs' activeKey={1} onSelect={(eventKey) => handleSelect(eventKey, props)}>
        <NavItem eventKey={1}>Manage Records</NavItem>
        <NavItem eventKey={2}>Admin</NavItem>
        <NavItem eventKey={3}>Settings</NavItem>
    </Nav>
)
