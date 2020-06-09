import { connect } from 'react-redux';
import ThoughtGallery from './ThoughtGallery';

// pass thoughts state down
const mapStateToProps = ({ thoughts }) => ({ thoughts });

export default connect(mapStateToProps)(ThoughtGallery);