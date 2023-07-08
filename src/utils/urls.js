export const domain = 'https://pizzaapi.pythonanywhere.com'
export const APP_MODE = '/api'

// User

export const login = '/token/'

// Products

export const productsListUrl = '/product/all'
export const productsAddUrl = '/product/all/'
export const productsEditUrl = (id) => `/product/${id}/`

// Categories

export const categoriesListUrl = '/category/all'
