import ApiService from "../services/ApiService";

export function getConfig() {
  return async (dispatch) => {
    const response = await ApiService.getConfig();
    dispatch({
        type: "GET_CONFIG",
        payload: response.images
    });
  };
}

export function getGenres() {
    return async (dispatch) => {
        const response = await ApiService.getGenres();
        dispatch({
            type: "GET_GENRES",
            payload: response
        });
    };
}

export function getDiscoveredMovies() {
    return async (dispatch) => {
        const response = await ApiService.getDiscoveredMovies();
        dispatch({
            type: "GET_DISCOVERED_MOVIES",
            payload: response
        });
    };
}
