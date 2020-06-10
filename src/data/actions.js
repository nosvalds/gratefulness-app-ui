export const newThought = ({ content, author }) => {
    return {
        type: "NEW_THOUGHT",
        content,
        author
    }
}

export const removeThought = ({ index }) => {
    return {
        type: "REMOVE_THOUGHT",
        index,
    }
}