import { store } from "../store/store"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
