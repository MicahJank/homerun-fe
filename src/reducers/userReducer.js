const intialState = {
  userInfo: {},
  userChild: {},
  loading: false,
  childActive: false
}

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    
    case "SET_LOADING_FALSE":
      return { ...state, loading: false };

    case "SET_USER":
      return {...state, userInfo: action.payload, loading: false };

    case "SET_CHILD": 
      return { ...state, userChild: action.payload, loading: false };

    case "CHILD_ACTIVE":
      return { ...state, loading: false, childActive: action.payload };

    case "UPDATE_USER_INFO":
      return { ...state, userInfo: { ...state.userInfo, ...action.payload } }

    default:
      return state;
  }
};

export default userReducer;
