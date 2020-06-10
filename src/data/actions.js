export const newThought = ({ content, author }) => {
    return {
        type: "NEW_THOUGHT",
        content,
        author
    }
}