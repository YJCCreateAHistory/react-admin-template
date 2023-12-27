import { configureStore } from '@reduxjs/toolkit'
import { commonActions, commonReducer } from './common'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
const store =  configureStore({
  reducer: {
    common: commonReducer
  }
})
export default store

type TDispatch = typeof store.dispatch
type TUseSelector = ReturnType<typeof store.getState>

export const useAppDispatch = ()=> useDispatch<TDispatch>()
export const useAppSelector: TypedUseSelectorHook<TUseSelector> = useSelector

export {
  commonActions
}