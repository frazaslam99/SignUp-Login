import signupreducer from "./signupreducer";
import { productsReducer, selectedProductsReducer } from "./productreducer";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {

        signupreducer,
        // productsReducer,
        allProducts: productsReducer,
        product: selectedProductsReducer,
    }
);

export default reducers;