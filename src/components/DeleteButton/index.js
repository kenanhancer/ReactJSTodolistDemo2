import React from 'react';
import PropTypes from 'prop-types';

const Delete = ({ disabled, onClick }) => (
    <button onClick={onClick} disabled={disabled} > Delete</button>
);

Delete.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Delete;