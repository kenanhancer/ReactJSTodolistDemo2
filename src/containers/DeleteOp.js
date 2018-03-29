import { connect } from 'react-redux';
import { deleteItems } from '../logic/todos';
import Delete from '../components/DeleteButton';

const mapStateToProps = (state, ownProps) => ({
    disabled: !state.todos.items.some(element => element.checked)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(deleteItems())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Delete);