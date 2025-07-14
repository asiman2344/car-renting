import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/slicer'

export const store = configureStore({
    reducer: {
        login:loginReducer,
    }
}) 