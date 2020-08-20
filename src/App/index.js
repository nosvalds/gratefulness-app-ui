import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ wordTokens, thoughtsLoaded }) => ({ 
    words: wordTokens, 
    loaded: thoughtsLoaded 
})

export default connect(mapStateToProps)(App);