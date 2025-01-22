import React from 'react';
import style from './itemcard.module.css';

export default function ItemCard({item}) {

    return(

        <div>
            <div className={style.itemcard}>
                <img src={item.images} alt={item.description} className="item-image"/>
                <div className={style.itemdescription}>
                    <p className={style.description}>{item.description}</p>
                    <p className={style.itemprice}>{item.price}원</p>
                    <p className={style.favouriteCount}>❤️{item.favourtieCount}</p>
                </div>

                
            </div>
        </div>
    )
}

