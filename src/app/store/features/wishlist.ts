import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface wishlistData {
  _id: string;
  title: string;
  image: string;
  price: number;
  description:string,
  inventory:number,
}

// Define the initial state using that type
const initialState: wishlistData[]  = []

export const wishlistSlice = createSlice({
  name: 'wishlist',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
       addtoWishlist(state,action){
        const newObj= {...action.payload};
        state.push(newObj);  
       },
       removeFromWishList(state, action: PayloadAction<string>) {  
        return state.filter(item => item._id !== action.payload); 
      },
       



  },
})

export const { addtoWishlist, removeFromWishList} = wishlistSlice.actions

export default wishlistSlice.reducer;