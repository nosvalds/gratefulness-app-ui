import axios from '../../axios/axios';
import { loadThoughts } from '../actions/state';

export const getThoughts = () => {
    return (dispatch) => {
        // now use axios to make an API request
        axios.get("").then(({ data }) => {
            // add the edit: false flag to each thought
            let result = data.map((thought) => ({...thought, edit: false}))
            dispatch(loadThoughts(result));
        });
    };
}