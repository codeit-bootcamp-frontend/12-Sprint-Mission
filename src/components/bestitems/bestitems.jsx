import React from 'react';
import style from './bestitems.module.css';
import {useState, useEffect} from 'react';
import ItemCard from './itemcard';




function BestItems(){

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect (()=>{
        const fetchData = async () => {
            try{
            const response = await fetch('https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=favorite');
            const data = await response.json();
            setItems(data.list);
            } catch (err){
                setError('Failed to fetch items');
                setItems([]);
            }
        };

        fetchData();
    }, []);

    if (error) return <div>Error: {error} </div>

    return(
        <div>
            <div className={style.bestitems}>
                베스트 상품
            </div>
            <div className={style.itemgrid}>
                {items.map((item)=>(
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default BestItems;