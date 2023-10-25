import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


// configureStrore contain slice of store //
const store= configureStore({

    reducer:{
        cart: cartSlice,
    }
});

export default store;