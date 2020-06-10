import { connect } from 'react-redux';
import NewCard from './NewCard';

// pass dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        handleDelete: (value) => dispatch(value),
    }
}

export default connect(null, mapDispatchToProps)(NewCard);