
export const APIKEY = 'AIzaSyBfmFbMP030V6Mf4fg5tXwr2iKLLdbMNZo'
export const API = `https://www.googleapis.com/books/v1/volumes?key=${APIKEY}`

export const getGoogleBooksURL = (queryParams: string) => API + '&' + queryParams