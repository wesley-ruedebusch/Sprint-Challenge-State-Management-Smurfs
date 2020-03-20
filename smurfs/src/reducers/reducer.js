import { SMURF_START, SMURF_SUCCESS, SMURF_FAIL, FORM_SUCCESS } from "../actions/actions";

const initialState = {
    smurfs: [],
    errors: '',
    isFetching: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SMURF_START:
            return {
                ...state,
                isFetching: true
            }
        case SMURF_SUCCESS:
            return {
              ...state,
              errors: "",
              isFetching: false,
              smurfs: action.payload
            }
        case SMURF_FAIL:
            return {
              ...state,
              errors: "that's not gonna smurf",
              isFetching: false
            }
        case FORM_SUCCESS:
            const newSmurf = {
                ...action.payload,
                id: Date.now()
            }
            return {
                ...state,
                smurfs: [...state.smurfs, newSmurf]
            }
        default:
            return state
    }
}

export default reducer;