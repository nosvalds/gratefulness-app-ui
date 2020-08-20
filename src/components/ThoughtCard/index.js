import { connect } from 'react-redux';
import ThoughtCard from './ThoughtCard';
import { setEditIndex } from '../../data/actions/state';
import { deleteThought } from '../../data/actions/api';

// pass dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        handleDelete: (data) => dispatch(deleteThought(data)),
        handleEditIndex: (data) => dispatch(setEditIndex(data))
    }
}

export default connect(null, mapDispatchToProps)(ThoughtCard);