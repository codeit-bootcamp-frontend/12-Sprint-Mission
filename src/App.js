import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from './component/ProductCard';

function App() {

  const [bestProduct, setBestProduct] = useState(); // 베스트(4개)

  useEffect(() => {
    fetch("https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite")
      .then(bestProduct => {
        return bestProduct.json();
      }).then(data => {
        setBestProduct(data);
      });
  }, []);

  const [allProduct, setAllProduct] = useState(); // 전체(10개)

  useEffect(() => {
    fetch("https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=favorite")
      .then(allProduct => {
        return allProduct.json();
      }).then(data => {
        setAllProduct(data);
      });
  }, []);

  return (
    <body>
      <header className='nav'>
        <div className='nav-container'>
          <a href='/App.js'>
            <img id='nav-logo' src="/images/home/panda_logo.png" alt="판다마켓 홈" />
          </a>
          <ul className='nav-container__list'>
            <li>자유게시판</li>
            <li>중고마켓</li>
          </ul>
        </div>
        <img id='nav-profile' src="/images/home/profilee.svg" alt='프로필' />
      </header>

      <main className='main-container'>
        <div className='best-item-container'>
          <h2 className='product-container__text'>베스트 상품</h2>
          <div className='best-item__list'>
            {bestProduct?.list.map(product => {
              const imageUrl = product.images[0];

              return (
                <ProductCard
                  imageUrl={imageUrl}
                  title={product.name}
                  price={product.price}
                  favoriteCount={product.favoriteCount}
                  imageSize={282} />
              )
            })}
          </div>
        </div>

        <div className='all-item-container'>
          <h2 className='product-container__text'>전체 상품</h2>
          <div className='all-item-tools'>
            <div className='input-box'>
              <input id='input-search' type='text' placeholder='검색할 상품을 입력해주세요' />
              <img id='input-img' src='/images/icons/searchIcon.png' alt='검색어 입력하기' />
            </div>
            <button className='product-btn' type='button' >상품 등록하기</button>
            <select className='product-select'>
              <option value={'recent'}>최신순</option>
              <option value={'favorite'}>좋와요순</option>
            </select>
          </div>
        </div>
        <div className='all-item__list'>
          {allProduct?.list.map(product => {
            const imageUrl = product.images[0];

            return (
              <ProductCard
                imageUrl={imageUrl}
                title={product.name}
                price={product.price}
                favoriteCount={product.favoriteCount}
                imageSize={221} />
            )
          })}
        </div>
      </main>


    </body>
  );
}

export default App;