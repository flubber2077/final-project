import {configureStore} from '@reduxjs/toolkit'
import songReducer from './song.js'
import currentIDReducer from './currentID'

export default configureStore({
    reducer: {
        song: songReducer,
        currentID: currentIDReducer
    }
})