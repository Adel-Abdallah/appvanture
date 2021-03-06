import "./index.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const accessToken = process.env.REACT_APP_TOKEN;
const apiUrl = "https://sw-coding-challenge.herokuapp.com/api/v1";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});

function AllProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const handleClick = data => {
    console.log(data);
    navigate(`/detailProduct`, {
      state: data
    });
  };
  useEffect(() => {
    authAxios
      .get(`${apiUrl}/products`)
      .then(response => {
        setProducts(response.data.d);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='all-product-card'>
      {products.map(product => (
        <div
          className='all-products-wrapper'
          onClick={() => handleClick(product)}>
          <div className='card-container'>
            <div className='img-container'>
              <div className='icon-wrapper'>
                <BsHeart className='icon' />
              </div>
              <div>
                <img className='img' src={product.imageUrl} alt='api' />
              </div>
            </div>

            <div className='spans-wrapper'>
              <span className='lighter'>
                <b className='normal'> {product.name} </b>
                {product.description}
              </span>
              <span className='price'>{product.salePrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AllProducts;
