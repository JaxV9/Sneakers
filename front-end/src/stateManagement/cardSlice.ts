import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ShoeMetadata {
  id: number;
  name: string;
  price: number;
  pictures_product?: string;
}
export interface CartItem {
  shoe: ShoeMetadata;
  numberInCart: number;
}
export interface CartMetadata {
  items: CartItem[];
}

const initialState: CartMetadata = {
  items: [
    {
      shoe: {
        id: 1,
        name: 'Blue Sneakers',
        price: 150,
      },
      numberInCart: 1,
    },
  ],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ShoeMetadata>) {
      const shoeToAdd = action.payload;
      const existingCartItem = state.items.find(
        (item) => item.shoe.id === shoeToAdd.id
      );

      if (existingCartItem) {
        existingCartItem.numberInCart += 1;
      } else {
        state.items.push({
          shoe: shoeToAdd,
          numberInCart: 1,
        });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const shoeIdToRemove = action.payload;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.shoe.id === shoeIdToRemove
      );

      if (existingCartItemIndex !== -1) {
        const existingCartItem = state.items[existingCartItemIndex];
        if (existingCartItem.numberInCart > 1) {
          existingCartItem.numberInCart -= 1;
        } else {
          state.items.splice(existingCartItemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
