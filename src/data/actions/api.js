import axios from '../../axios/axios';
import { loadThoughts, newThought } from '../actions/state';

export const getThoughts = () => {
    return (dispatch) => {
        // now use axios to make an API request
        axios.get("").then(({ data }) => {
            // add the edit: false flag to each thought, reverse chronological
            let result = data.map((thought) => ({...thought, edit: false})).reverse()
            dispatch(loadThoughts(result));
        })
        .catch((err) => {
                console.log("Error in GET thoughts from from database. Not able to retrieve thoughts", err)
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
                console.log("Error in POST thought to database. Not able to save thought", err)
            }
        );
    };
}