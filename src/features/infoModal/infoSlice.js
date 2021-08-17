import { createSlice } from '@reduxjs/toolkit';

const initialState = {"visible": false}

const infoSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
        setVisible(state, action) { state.visible = action.payload }
    }
})

export const { setVisible } = infoSlice.actions

export default infoSlice.reducer