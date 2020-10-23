import axios from "axios";
export const baseUrl = "https://api.themoviedb.org/3";
export default {
    getConfig: () => 
        axios.get(`${baseUrl}/configuration`, {
            params: { api_key: process.env.REACT_APP_API }
        }).then((apiResponse) => {
            return apiResponse.data
        }).catch(error => console.log(error)),

    getGenres: () => 
        axios.get(`${baseUrl}/genre/movie/list`,{
            params: { api_key: process.env.REACT_APP_API }
        }).then((apiResponse)=>{
            return apiResponse.data.genres
        }).catch(error => console.log(error)), 
      
    getDiscoveredMovies: (pageNumber) =>
        axios.get(`${baseUrl}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_API,
                page: 2,
                // page: pageNumber,
                sort_by: "popularity"
            }
        })
        .then((apiResponse) => {
            return apiResponse.data
        }).catch(error => console.log(error)),
};