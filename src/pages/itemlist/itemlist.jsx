import React from 'react';
import Header from '../../components/header/header';
import BestItems from '../../components/bestitems/bestitems';
import style from './itemlist.module.css';
import AllItems from '../../components/allitems/allitems';



function ItemList(){


    return(
        <div>
            <Header />
            <div className={style.container}>
                <section>
                    <BestItems/>
                </section>
                <br />
                <br />
                <section>
                    <AllItems />
                </section>
            </div>

        </div>
    );
}

export default ItemList;