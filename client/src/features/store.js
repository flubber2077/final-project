import {configureStore} from '@reduxjs/toolkit'
import songReducer from './song.js'

export default configureStore({
    reducer: {
        song: songReducer
    }
})