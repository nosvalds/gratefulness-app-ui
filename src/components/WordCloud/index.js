import { connect } from 'react-redux';
import WordCloud from './WordCloud';

const mapStateToProps = ({ wordTokens }) => ({ 
    words: wordTokens,
})

export default connect(mapStateToProps)(WordCloud);