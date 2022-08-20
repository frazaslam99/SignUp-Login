import React, { useEffect} from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../actions/productaction";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const dispatch = useDispatch();


  useEffect(async() => {
    const api=await fetch("https://fakestoreapi.com/products");
    const data=await api.json();
    dispatch(setProducts(data));
    
   
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;