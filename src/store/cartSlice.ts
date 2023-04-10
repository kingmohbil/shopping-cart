import { createSlice, current } from '@reduxjs/toolkit';
import ProductType from '../products/ProductInterface';

interface CartType extends ProductType {
  count: number;
}

interface StateType {
  cartProducts: CartType[];
}

const initialState: StateType = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // taking copy of the cartState
      const tempState: StateType = current(state);
      // searching for the existence of the product in the cart
      const index: number = tempState.cartProducts.findIndex(
        (item) => item.name === action.payload.name
      );
      // adding the product to the cart if the product does not exist,
      // or if the array is already empty
      if (index === -1 || tempState.cartProducts.length === 0)
        state.cartProducts.push(action.payload);
      // if the product is already in the cart the count gets incremented
      else {
        // testing for the total count to not exceed 20 product
        const totalCount: number =
          action.payload.count + state.cartProducts[index].count;

        if (totalCount > 21) state.cartProducts[index].count = 20;
        else state.cartProducts[index].count = totalCount;
      }
      console.log(current(state.cartProducts));
    },
    removeItem: (state, action) => {
      // taking copy of the cartState
      const tempState: StateType = current(state);
      // searching for the existence of the product in the cart
      const index: number = tempState.cartProducts.findIndex(
        (item) => item.name === action.payload.name
      );
      // mutating the state to remove the specified element
      // slice does mutate the array
      if (index > -1) {
        state.cartProducts.splice(index, 1);
      }
      console.log(current(state));
    },
    removeOneItem: (state, action) => {
      // taking copy of the cartState
      const tempState: StateType = current(state);
      // searching for the existence of the product in the cart
      const index: number = tempState.cartProducts.findIndex(
        (item) => item.name === action.payload.name
      );
      // decrementing the count of the item in the cart
      if (index > -1) {
        const count: number = state.cartProducts[index].count;
        if (count > 1) state.cartProducts[index].count -= 1;
      }
      console.log(current(state));
    },
  },
});

export const { addItem, removeItem, removeOneItem } = cartSlice.actions;
