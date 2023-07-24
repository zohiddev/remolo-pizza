export const domain = 'https://pizzaapi.pythonanywhere.com'
export const APP_MODE = '/api'


// User


export const login = '/token/'


// Categories


export const categoriesListUrl = '/category/all'

export const categoriesAddUrl = '/category/all/'

export const categoriesEditUrl = (id) =>  `/category/${id}/`

export const categoriesDeleteUrl = (id) =>  `/category/${id}/`


// Products 


export const productsListUrl = '/product/all'

export const productsAddUrl = '/product/all/'

export const productsEditUrl = (id) => `/product/${id}/`

export const productsDeleteUrl = (id) => `/product/${id}/`


