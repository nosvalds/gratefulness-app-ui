import { connect } from 'react-redux';
import ThoughtGallery from './ThoughtGallery';

// pass thoughts state down
const mapStateToProps = ({ thoughts }) => ({ thoughts });

// pass dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        // removed delete down to card level
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThoughtGallery);