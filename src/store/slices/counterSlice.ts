import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

import { CounterActionPayload } from "../../types";

const counterSlice = createSlice({
  name: "counter",
  reducers: {
    increaseByOne: (state) => state + 1,
    decreaseByOne: (state) => state - 1,
    increaseByNumber: (state, action: PayloadAction<CounterActionPayload>) =>
      state + action.payload.number,
  },
  initialState: 0,
});

export default counterSlice;
