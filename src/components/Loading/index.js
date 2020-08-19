import { connect } from 'react-redux';
import Loading from './Loading';
import { getThoughts } from '../../data/actions/api';

const mapStateToProps = ({ thoughtsLoaded }) => {
    return {
        loaded: thoughtsLoaded,
    };
}

const matchDispatchToProps = (dispatch) => {
    return {
        // dispatch API action to get match history from the database
        handleLoad: () => dispatch(getThoughts()), 
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Loading);