import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  products: [],
  checked: [],
  radio: [],
  brandCheckboxes: {},
  checkedBrands: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCategories: (state, acion) => {
      state.categories = acion.payload;
    },
    setProducts: (state, acion) => {
      state.products = acion.payload;
    },
    setChecked: (state, acion) => {
      state.checked = acion.payload;
    },
    setRadio: (state, acion) => {
      state.radio = acion.payload;
    },
    setBrandCheckboxes: (state, acion) => {
      state.brandCheckboxes = acion.payload;
    },
    setCheckBrands: (state, acion) => {
      state.checkedBrands = acion.payload;
    },
  },
});

export const {
  setCategories,
  setProducts,
  setChecked,
  setBrandCheckboxes,
  setCheckBrands,
  setRadio,
} = shopSlice.actions;
export default shopSlice.reducer;
