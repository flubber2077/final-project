import { configureStore } from '@reduxjs/toolkit'
import songReducer from '../features/'

export default configureStore({
    reducer: {
        song: songReducer
    }
}
