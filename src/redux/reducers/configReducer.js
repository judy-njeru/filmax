
const initialState = {
    loading: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_CONFIG":
            return { ...state, images: action.payload};
        case "GET_GENRES":
            return { ...state, genres: action.payload };
      default:
        return state;
    }
  }