import React from 'react';
import style from './allitems.module.css'

export default function AllItems(){

    return(
        <div>
            <section className={style.AllItemsHeader}>
                <p>전체상품</p>
                <div className={style.AllItemsHeaderButtons}>
                    <input placeholder="검색할 상품을 입력해주세요" />
                    <button className={style.registerproduct}>상품 등록하기</button>
                    <button className={style.togglefilter}>최신순</button>
                </div>
            </section>
            {/* <section>
                <AllItemList />
            </section>
             */}
        </div>
    )
}