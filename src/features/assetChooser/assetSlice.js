import { createSlice } from '@reduxjs/toolkit';

const initialState = {"cellType1": "aCD4", "cellType2": "naCD4", "gene": "IL7R"}

const assetSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        setCellType1(state, action) { state.cellType1 = action.payload },
        setCellType2(state, action) { state.cellType2 = action.payload },
        setGene(state, action) { state.gene = action.payload }
    }
})

export const { setCellType1, setCellType2, setGene } = assetSlice.actions

export default assetSlice.reducer