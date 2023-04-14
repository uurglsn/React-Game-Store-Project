import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: localStorage.getItem('language') || 'tr_TR',
  darkTheme: localStorage.getItem('theme') || 'dark',
  signOrRegister: false
}

export const appSlice = createSlice({
  name: 'appRedux',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.darkTheme = !state.darkTheme
      localStorage.setItem('theme', state.darkTheme ? 'dark' : 'light');
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem('language', action.payload);
    },
    toRegisterOrSign: (state , action) => {
      state.signOrRegister = action.payload
    }
  }
})

export const { changeTheme, changeLanguage, toRegisterOrSign } = appSlice.actions

export default appSlice.reducer