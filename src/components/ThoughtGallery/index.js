import { connect } from 'react-redux';
import ThoughtGallery from './ThoughtGallery';

// pass thoughts state down
const mapStateToProps = ({ thoughts, thoughtsDisplayed }) => {
    return { 
        thoughts: thoughts.slice(0, thoughtsDisplayed), 
    }
};

export default connect(mapStateToProps)(ThoughtGallery);