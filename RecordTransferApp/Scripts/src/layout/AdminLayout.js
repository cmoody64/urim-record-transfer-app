import React from 'react'

export const AdminLayout = React.createClass({
    getInitialState() {
        return {text: "ADMIN PAGE"}
    },
    render() {
        return (
          <div className='adminLayout'>ADMIN PAGE</div>
        )
    }
})
