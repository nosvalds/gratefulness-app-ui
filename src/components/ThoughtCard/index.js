import { connect } from 'react-redux';
import ThoughtCard from './ThoughtCard';

// pass dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        handleDelete: (value) => dispatch(value),
    }
}

export default connect(null, mapDispatchToProps)(ThoughtCard);