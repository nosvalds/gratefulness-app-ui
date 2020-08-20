import { connect } from 'react-redux';
import Header from './Header';
import { startRefresh } from '../../data/actions/state'

// pass dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        handleRefresh: () => dispatch(startRefresh())
    }
}

export default connect(null, mapDispatchToProps)(Header);