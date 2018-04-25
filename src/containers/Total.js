import { connect } from 'react-redux';
import { deleteItems } from '../logic/todos';
import TotalFooter from '../components/TotalFooter';

const mapStateToProps = (state, ownProps) => ({
    total: state.todos.items.length
});

export default connect(
    mapStateToProps,
    null
)(TotalFooter);