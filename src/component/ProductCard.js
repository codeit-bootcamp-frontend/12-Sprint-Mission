import './component.css';

function ProductCard({ title, price, imageUrl, favoriteCount, imageSize }) {

  return (
    <div className='product-container'>
      <img className='product-container__image' src={imageUrl} alt='' width={imageSize} height={imageSize}/>
        <div className='product-container__text'>
          <p id='product-title-text'>{title}</p>
          <p id='product-price-text'>{price}원</p>
          <div className='product-container__favorite'>
            <img id='favorite-img' src='/images/icons/heartIcon.png' alt='하또' />
            <p id='favorite-text' >{favoriteCount}</p>
           </div>
        </div>

    </div>
  )
}

export default ProductCard;