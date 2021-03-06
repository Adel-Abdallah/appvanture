import "./index.css";
import { BsHeart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

function ProductContainer(props) {
  const navigate = useNavigate();
  const handleClick = data => {
    navigate(`/detailProduct`, {
      state: data
    });
  };
  return (
    <div className='product'>
      <div className='whiteContainer'>
        <div className='one'>
          <span className='recommended'>Recommended for you</span>
          <span className='more'>
            <Link className='more' to='/all-products'>
              See more
            </Link>
          </span>
        </div>
        <div className='cards-wrapper'>
          {props.products.map((product, index) => (
            <div className='card-container' key={index}>
              <div className='img-container'>
                <div className='icon-wrapper'>
                  <BsHeart className='icon' />
                </div>
                <div onClick={() => handleClick(product)}>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
