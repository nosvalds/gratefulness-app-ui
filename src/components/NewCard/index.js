import { connect } from 'react-redux';
import NewCard from './NewCard';
import { newThought } from '../../data/actions'

// pass dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        handleDelete: (value) => dispatch(value),
        handleSubmit: (data) => dispatch(newThought(data))
    }
}

export default connect(null, mapDispatchToProps)(NewCard);