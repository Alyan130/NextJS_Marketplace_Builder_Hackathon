import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '@/sanity/lib/client';

// Define the interface for product data
interface ProductData {
  _id:string,
  title: string,
  image: string,
  price: number,
  badge?:string,
  priceWithoutDiscount?:number,
  inventory: number,
  description:string,
  quantity?:number,
}


interface ProductState {
  products: ProductData[];
}

const initialState: ProductState = {
  products: [],
};

interface RootState {
  product: ProductState;
}

export const fetchProducts = createAsyncThunk<ProductData[]>(
  'products/fetchProducts',
  async () => {
    const pdata = await client.fetch(`
    *[_type=="products"]{
      _id,
      title,
      image,
      price,
      description,
      badge,
      inventory,
      priceWithoutDiscount,
    }`);
 
    return pdata; // Return the fetched data
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload; // Update the state with fetched products
    });
  },
});


export const selectAllProducts = (state: { product: ProductState }) => state.product.products;

// Selector to fetch a single product by ID
export const selectProductById = (state:RootState, id: string) =>
  state.product.products.find((product) => product._id === id);


export default productSlice.reducer;

