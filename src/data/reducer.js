export const addThought = (state, { content, author }) => {
    return {
        ...state,
        thoughts: [...state.thoughts,
            { 
                content: content, 
                author: author 
            } // add a thought with content and an author
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
        thoughts: state.thoughts.map((thought, i) =>{
            return i === index ? {
                ...thought, 
                content: content, 
                author: author
            } : 
            thought;  // if the index matches update the thought, otherwise keep it the same
        })
    };
}

const reducer = (state, action) => {
    switch (action.type) {
        case "NEW_THOUGHT": return addThought(state, action);
        case "REMOVE_THOUGHT": return removeThought(state, action);
        case "CHANGE_THOUGHT": return updateThought(state, action);
        default: return state;
    }
}

export default reducer;