import { connect } from 'react-redux';
import App from './App';

import { displayMore } from '../data/actions/state'

const mapStateToProps = ({ thoughts, thoughtsDisplayed }) => {
    return {
        allDisplayed: thoughts.length === thoughtsDisplayed
    }
}
// pass dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch(displayMore()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);