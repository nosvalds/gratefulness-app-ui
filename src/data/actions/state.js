export const newThought = ({ content, author }) => {
    return {
        type: "NEW_THOUGHT",
        content,
        author
    }
}

export const removeThought = (index) => {
    return {
        type: "REMOVE_THOUGHT",
        index,
    }
}

export const updateThought = ({ content, author, index }) => {
    return {
        type: "UPDATE_THOUGHT",
        index,
        author,
        content
    }
}

export const setEditIndex = ({ index }) => {
    return {
        type: "EDIT_INDEX",
        editIndex: index
    }
}

export const loadThoughts = (thoughts) => {
    return {
        type: "LOAD_THOUGHTS",
        thoughts,
    }
}