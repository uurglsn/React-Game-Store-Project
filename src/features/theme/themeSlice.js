import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: localStorage.getItem('language') || 'tr_TR',
  darkTheme: localStorage.getItem('theme') || 'dark',
}

export const themeSlice = createSlice({
  name: 'theme',
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
  }
})

export const { changeTheme, changeLanguage } = themeSlice.actions

export default themeSlice.reducer