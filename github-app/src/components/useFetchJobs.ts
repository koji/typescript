import { useReducer, useEffect } from "react";
import axios from 'axios';

const ACTIONS = {
  MAKE_REQUEST: 'make_request',
  GET_DATA: 'get-data',
  ERROR: 'error',
  UPDATE_HAS_NEXT_PAGE: 'update-has-next-page',
};

// 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
// const BASE_URL = "https://jobs.github.com/positions.json";
const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

// ToDo define state --> loading, jobs
const reducer = (state: any, action: any) => {
  switch(action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {loading: true, jobs:[]};

    case ACTIONS.GET_DATA:
      return {...state, loading: false, jobs: action.payload.jobs};

    case ACTIONS.ERROR:
      return {...state, loading: false, error: action.payload.error, jobs: []};

    case ACTIONS.UPDATE_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage };


    default:
      return state;
  }

}

export const useFetchJobs = (params?: any, page?: any) => {
  const [state, dispatch] = useReducer(reducer, {jobs: [], loading: true});

  // dispatch({ type: 'hello', payload: {x: 3}});
  // ToDo use try catch
  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST})
    axios.get(BASE_URL, {
      cancelToken: cancelToken1.token,
      params: {markdown: true, page: page, ...params}
    }).then(res => {
      dispatch({type: ACTIONS.GET_DATA, payload: {jobs: res.data} })
    }).catch(e => {
      if(axios.isCancel(e)) return;
      dispatch({ type: ACTIONS.ERROR, payload: {error: e}})
    })

    // for pagination
    const cancelToken2 = axios.CancelToken.source();
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken2.token,
        params: { markdown: true, page: page + 1, ...params },
      })
      .then((res) => {
        dispatch({ type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage: res.data.length !==0 } });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    return () => {
      cancelToken1.cancel();
      cancelToken2.cancel();
    }


  }, [params, page])
  console.log(state);
  return state;
}