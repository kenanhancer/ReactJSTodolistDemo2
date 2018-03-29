import React from 'react';
import FilterLink from '../../containers/FilterLink';
import { VisibilityFilters } from '../../actions';
import DeleteOp from '../../containers/DeleteOp';

const Footer = () => (
    <div>
        <span>Operations:</span>
        <DeleteOp />
        <br />
        <span>Filter: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
      </FilterLink>
    </div>
);

export default Footer;