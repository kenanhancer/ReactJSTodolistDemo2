import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ onClick, onCheck, completed, content, checked }) => (
    <li>
        <input type="checkbox" onClick={onCheck} defaultChecked={checked} />
        <span onClick={onClick}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}>{content}</span>
    </li>
)

Item.propTypes = {
    onClick: PropTypes.func.isRequired,
    onCheck: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
}

export default Item;