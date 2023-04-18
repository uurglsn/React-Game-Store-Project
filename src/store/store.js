import { configureStore } from '@reduxjs/toolkit'
import themeSlice from "../features/theme/themeSlice"
import authSlice from "../features/auth/authSlice"
import adminSlice from "../features/admin/adminSlice"
import cartSlice from "../features/cart/cartSlice"
export const store = configureStore({
    reducer: {
        theme: themeSlice,
        auth: authSlice,
        admin: adminSlice,
        cart: cartSlice

    },
})