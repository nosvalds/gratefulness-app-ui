import { connect } from 'react-redux';
import ThoughtCard from './ThoughtCard';
import { removeThought } from '../../data/actions';

// pass dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        handleDelete: (data) => dispatch(removeThought(data)),
    }
}

export default connect(null, mapDispatchToProps)(ThoughtCard);