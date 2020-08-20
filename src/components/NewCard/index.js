import { connect } from 'react-redux';
import NewCard from './NewCard';
import { postThought, putThought } from '../../data/actions/api'

// pass dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => dispatch(postThought(data)),
        handleUpdate: (data) => dispatch(putThought(data))
    }
}

export default connect(null, mapDispatchToProps)(NewCard);