import {ActionTypes} from "./actionTypes.ts";

export type CounterState = {
  count: number
}

export type CounterAction = { type: ActionTypes.INCREMENT } | { type: ActionTypes.DECREMENT }
