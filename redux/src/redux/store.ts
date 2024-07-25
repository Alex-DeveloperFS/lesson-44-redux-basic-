import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./reduser.ts"

const store = configureStore({
  reducer: counterReducer

})

export default store