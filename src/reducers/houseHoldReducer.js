import { ERROR, FETCH_MEMBERS_SUCCESS, LOADING, ADD_CHILD } from '../actions/houseHoldActions.js';
import { act } from 'react-dom/test-utils';

const initialState = {
      allUsers: [],
      members: [],
      children: [],
      error: '',
      loading: false
  };
  
  const houseHoldReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
            ...state,
            error: '',
            loading: true
            }
        case FETCH_MEMBERS_SUCCESS:
            return {
                ...state,
                error: '',
                loading: false,
                members: action.payload.members,
                children: action.payload.children,
                allUsers: [...action.payload.members, ...action.payload.children]
            }
        case ADD_CHILD:
            return {
                ...state,
                error: '',
                children: [...state.children, action.payload],
                allUsers: [...state.allUsers, action.payload]

            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            } 
      default:
        return state;
    }
  };
  
  export default houseHoldReducer;
  