
import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './features/product';
import  cartSlice  from './features/cart';
import  wishlistSlice  from './features/wishlist';
// ...

export const store = configureStore({
  reducer: {
   product:productSlice,
   cart:cartSlice,
   wishlist:wishlistSlice, 
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;