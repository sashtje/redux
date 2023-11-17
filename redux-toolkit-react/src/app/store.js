import {configureStore} from "@reduxjs/toolkit";

import {counterReducer} from "../features/counter/model/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
