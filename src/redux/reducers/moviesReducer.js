export default function discoveredMovies(state = [], action) {
    switch (action.type) {
      case "GET_DISCOVERED_MOVIES":
            return { ...state, movies: action.payload };
      default:
        return state;
    }
    
  }
  