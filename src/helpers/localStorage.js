export const updateLocalStorage = (key, state) => {
    localStorage.setItem(key, JSON.stringify(state))
}

export const deleteLocalStorage = (key) => {
    localStorage.removeItem(key)
}