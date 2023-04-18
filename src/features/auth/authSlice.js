import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginIn: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload))
      state.user = action.payload
    },
    loginOut: (state) => {
      localStorage.removeItem('user')
      state.user = false
    },

  }
})

export const { loginIn, loginOut } = authSlice.actions

export default authSlice.reducer