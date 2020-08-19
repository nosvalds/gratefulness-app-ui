import { connect } from 'react-redux';
import NewCard from './NewCard';
import { removeThought } from '../../data/actions/state'
import { postThought, putThought } from '../../data/actions/api'

// pass dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => dispatch(postThought(data)),
        handleDelete: (data) => dispatch(removeThought(data)),
        handleUpdate: (data) => dispatch(putThought(data))
    }
}

export default connect(null, mapDispatchToProps)(NewCard);