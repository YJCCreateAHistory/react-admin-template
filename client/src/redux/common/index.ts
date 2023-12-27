import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit';
interface IState {
  isCollapsed: boolean;
}
const initialState = {
  isCollapsed: false
}
export const counterSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    setMenuExpand: (state: IState, action: PayloadAction<{ isCollapsed }>) => {
      state.isCollapsed = action.payload.isCollapsed
    }
  }
})

export const commonActions = counterSlice.actions
export const commonReducer = counterSlice.reducer