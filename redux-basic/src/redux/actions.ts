import {ActionTypes} from "./actionTypes.ts";
import {ThunkAction} from "@reduxjs/toolkit";
import {CounterAction, CounterState} from "./types.ts";

export const incrementAsync = ():ThunkAction<void, CounterState, unknown, CounterAction> => (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ActionTypes.INCREMENT})
    }, 1000)
  }

export const decrementAsync = ():ThunkAction<void, CounterState, unknown, CounterAction> => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: ActionTypes.DECREMENT})
  }, 1000)
}
