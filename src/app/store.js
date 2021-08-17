import { configureStore } from '@reduxjs/toolkit';
import assetReducer from '../features/assetChooser/assetSlice';
import infoReducer from '../features/infoModal/infoSlice';

export const store = configureStore({
    reducer: {
        assets: assetReducer,
        info: infoReducer
    },
});