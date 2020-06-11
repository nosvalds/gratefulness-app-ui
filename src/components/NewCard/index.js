import { connect } from 'react-redux';
import NewCard from './NewCard';
import { newThought, removeThought, updateThought } from '../../data/actions'

// pass dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        handleDelete: (data) => dispatch(removeThought(data)),
        handleSubmit: (data) => dispatch(newThought(data)),
        handleUpdate: (data) => dispatch(updateThought(data))
    }
}

export default connect(null, mapDispatchToProps)(NewCard);