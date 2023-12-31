const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numOfIcecreams: 10,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
});

module.exports = {
  icecreamReducer: icecreamSlice.reducer,
  icecreamActions: icecreamSlice.actions,
};
