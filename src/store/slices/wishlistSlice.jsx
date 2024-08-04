import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: false,
}

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addWishlist: (state) => {
            state.value = true
        }
    }
});
export const {addWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer