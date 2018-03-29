import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item'
import './styles.css';

export const ItemsList = ({ items, toggleTodo, toggleCheck }) => {
    return (
        <div>
            <ul className="itemsList-ul">
                {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
                {items.map(item =>
                    <Item
                        key={item.id}
                        {...item}
                        onClick={() => toggleTodo(item.id)}
                        onCheck={() => toggleCheck(item.id)}
                    />)}
            </ul>
        </div>
    );
};

ItemsList.propTypes = {
    items: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    toggleCheck: PropTypes.func.isRequired
};

export default ItemsList;