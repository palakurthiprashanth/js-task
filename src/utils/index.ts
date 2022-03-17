import { API_BASE_URL } from "../constants/urls";

export const capitalizeFirstLetter = (str:string) =>
str.charAt(0).toUpperCase() + str.slice(1);


  export const formatURL= (page: number=1, sortBy?: string, manufacturer?: string, color?: string) => {
    let url=  `${API_BASE_URL}/cars?page=${page}&`
    if (manufacturer) {
      url+= `manufacturer=${manufacturer}&`;
    }
    if (color) {
      url+= `color=${color}&`
    }
    if (sortBy) {
      url+=`sort=${sortBy}&`
    }
    url = url.slice(0, -1);
    return url;
  }