import React from 'react'
import PropTypes from 'prop-types'

const Delete = ({active, onClick }) => (
    <button onClick={onClick} disabled={active}> Delete</button>
)

Delete.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Delete;