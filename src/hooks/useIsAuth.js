import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setAuth } from "../redux/slices/authSlice"
import { useMemo, useState } from "react"


function useIsAuth() {
    const { tokens, isAuth } = useSelector((state) => state.auth)
    const navigator = useNavigate()
    const dispatch = useDispatch()

    return useMemo(() => {
        if (
            Boolean(tokens.accessToken?.trim()) &&
            Boolean(tokens.refreshToken?.trim())
        ) {
            dispatch(setAuth(true))
            navigator('/products')
            return true
        } else {
            dispatch(setAuth(false))
            return false
        }
    }, [tokens])

}
export default useIsAuth