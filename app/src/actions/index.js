import axios from 'axios'

export const getDish = () => {
    return (dispatch) => {
        dispatch(fetchStart ());
            axios.get('https://foodish-api.herokuapp.com/api/')
            .then (res => {
                console.log(res.data)
                dispatch(fetchSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchFail(err));
            })
        }
    }

    
export const FETCH_START = "FETCH_START";
export const fetchStart = ()=> {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (food)=> {
    return({type: FETCH_SUCCESS, payload: food});
}

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload: error});
}
