import axios from 'axios';

export const SMURF_START = "SMURF_START";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAIL = "SMURF_FAIL";
export const FORM_SUCCESS = "FORM_SUCCESS";

export const getSmurf = () => dispatch => {
    dispatch({type: SMURF_START});
    axios.get("http://localhost:3333/smurfs")
        .then(response => {
            console.log(response.data)
            dispatch({type: SMURF_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: SMURF_FAIL, payload: error})
        })
}

export const smurfForm = (formData) => dispatch => {
    dispatch({type: FORM_SUCCESS, payload: formData})
    axios.post("http://localhost:3333/smurfs", formData)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log("no smurfin way", error)
        })
}