import React from 'react';
import Header from '../../components/header/header';
import BestItems from '../../components/bestitems/bestitems';
import style from './itemlist.module.css';


function ItemList(){


    return(
        <div>
            <Header />
            <div className={style.container}>
                <section>
                    <h3>
                        베스트 상품
                    </h3>
                    <BestItems/>
                </section>
                <section>
                    <h3>
                        전체 상품
                    </h3>
                </section>
            </div>

        </div>
    );
}

export default ItemList;