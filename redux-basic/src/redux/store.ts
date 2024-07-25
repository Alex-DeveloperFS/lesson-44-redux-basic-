import { Action, configureStore, Dispatch, Middleware, MiddlewareAPI } from '@reduxjs/toolkit'
import { CounterAction, CounterState, RootState } from './types.ts'
import counterReducer, {initialState} from "./reduсer.ts";

const logger: Middleware = (storeApi: MiddlewareAPI<Dispatch, RootState>) => (next) => (action) => {
  const prevState = storeApi.getState().counter.count
  const result = next(action)
  const nextState = storeApi.getState().counter.count

  console.log(
    `Previous count: ${prevState} \n\tDispatch action: ${(action as CounterAction).type} \n\t\tNext count: ${nextState}`
  )
  return result
}

const store = configureStore({
  reducer: {
    counter: (state: CounterState = initialState, action: Action) => counterReducer(state, action as CounterAction)
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store