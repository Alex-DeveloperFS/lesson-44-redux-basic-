import {CounterAction, CounterState} from "./types.ts";
import {ActionTypes} from "./actionTypes.ts";

const initialState: CounterState = {
  count: 0
}

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction): CounterState => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { count: state.count + 1 }
    case ActionTypes.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default counterReducer