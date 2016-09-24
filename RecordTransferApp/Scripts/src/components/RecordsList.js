import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export const RecordsList = (props) => (
    <ListGroup>
        {
            props.records.map((record, index) => (
                <ListGroupItem header={record.department} onClick={() => console.log('list item clicked')}
                    key={index} bsStyle={props.style}>
                {`submitted by ${record.submitter} on ${record.submissionDate}: `}
                <strong>{`${record.status}`}</strong>
                </ListGroupItem>
            ))
        }
    </ListGroup>
)
