import { connect } from 'react-redux';
import { toggleTodo, toggleCheck } from '../logic/todos';
import ItemsList from '../components/ItemsList';

const getVisibleTodos = (items, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return items
        case 'SHOW_COMPLETED':
            return items.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return items.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = state => ({
    items: getVisibleTodos(state.todos.items, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    toggleCheck: id => dispatch(toggleCheck(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsList);