import axios from '../../axios/axios';
import { loadThoughts, newThought, updateThought, removeThought } from '../actions/state';

export const getThoughts = () => {
    return (dispatch) => {
        // now use axios to make an API request
        axios.get("").then(({ data }) => {
            // add the edit: false flag to each thought, reverse chronological
            let result = data.map((thought) => ({...thought, edit: false})).reverse()
            dispatch(loadThoughts(result));
        })
        .catch((err) => {
                console.log("Not able to retrieve thoughts. Error in GET request to database.", err)
            }
        );
    };
}

export const postThought = (thought) => {
    return (dispatch) => {
        // now use axios to make an API request
        axios.post("", thought ).then(({ data }) => {
            // once we have a successful POST, update state with the thought
            dispatch(newThought(data));
        })
        // basic error handling
        .catch((err) => {
                console.log("Not able to save thought. Error in POST thought to database.", err)
            }
        );
    };
}

export const putThought = ({ id, content, author, index }) => {
    return (dispatch) => {
        // now use axios to make an API request
        axios.put(`/${id}`, {
            content,
            author, 
        }).then(({ data }) => {
            // once we have a successful PUT, update state with the thought
            data.index = index; // add index for updateThought
            dispatch(updateThought(data));
        })
        // basic error handling
        .catch((err) => {
                console.log("Not able to save thought. Error in PUT thought to database.", err)
            }
        );
    };
}

export const deleteThought = ({ id,  index }) => {
    return (dispatch) => {
        // now use axios to make an API request
        axios.delete(`/${id}`).then(() => {
            // once we have a successful DELETE, update state to remove the thought
            dispatch(removeThought(index));
        })
        // basic error handling
        .catch((err) => {
                console.log("Not able to save thought. Error in DELETE thought request to database.", err)
            }
        );
    };
}