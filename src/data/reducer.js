import { tokenizeWords, mergeTokens } from './nlp';

export const addThought = (state, { content, author }) => {
    return {
        ...state,
        thoughts: [
            { 
                content: content, 
                author: author, 
                edit: false
            } // add a thought with content and an author
            ,...state.thoughts
        ]
    };
};

export const removeThought = (state, { index }) => {
    return {
        ...state,
        thoughts: state.thoughts.filter((_, i) => i !== index) // filter to remove the item where index matches i
    };
}

export const updateThought = (state, { index, content, author }) => {
    return {
        ...state,
        thoughts: state.thoughts.map((thought, i) => {
            return i === index ? {
                ...thought, 
                content: content, 
                author: author,
                edit: false // set edit flag to false once updated
            } : 
            thought;  // if the index matches update the thought, otherwise keep it the same
        })
    };
}

export const editThought = (state, { editIndex }) => {
    return {
        ...state,
        thoughts: state.thoughts.map((thought, i) => {
            return i === editIndex ? {
                ...thought, 
                edit: true,
            } : 
            thought;  // if the index matches update the thought, otherwise keep it the same
        })
    };
}

// accepts an array of thought objects 
export const loadThoughts = (state, { thoughts }) => {
    return {
        ...state,
        thoughts: thoughts,
        thoughtsLoaded: true
    }
}

// tokenize words for wordcloud
export const tokenWordsOnLoad = (state, { thoughts }) => {
    let target = [];
    const contentSettings = {
            allowNumbers: false,
            maxWords: 100,
            stemmer: null,
            stopwordsInput: '',
        }
    thoughts.forEach((thought) => {
        let source = tokenizeWords(thought.content, contentSettings);
        target = mergeTokens(source, target, "text", "value");
    })

    return {
        ...state,
        wordTokens: target
    }
}

export const displayMore = (state) => {
    let thoughtsDisplayed = state.thoughtsDisplayed;
    let totalThoughts = state.thoughts.length;
    if (thoughtsDisplayed + 5 > totalThoughts) {
        thoughtsDisplayed = totalThoughts;
    } else {
        thoughtsDisplayed += 5;
    }
    return {
        ...state,
        thoughtsDisplayed
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "NEW_THOUGHT": return addThought(state, action);
        case "REMOVE_THOUGHT": return removeThought(state, action);
        case "UPDATE_THOUGHT": return updateThought(state, action);
        case "EDIT_INDEX": return editThought(state, action);
        case "LOAD_THOUGHTS": return loadThoughts(tokenWordsOnLoad(state, action), action);
        case "DISPLAY_MORE": return displayMore(state);
        case "REFRESH": return { thoughtsLoaded: false };
        default: return state;
    }
}

export default reducer;