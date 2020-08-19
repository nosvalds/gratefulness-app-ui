import { connect } from 'react-redux';
import NewCard from './NewCard';
import { removeThought, updateThought } from '../../data/actions/state'
import { postThought } from '../../data/actions/api'

// pass dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => dispatch(postThought(data)),
        handleDelete: (data) => dispatch(removeThought(data)),
        handleUpdate: (data) => dispatch(updateThought(data))
    }
}

export default connect(null, mapDispatchToProps)(NewCard);