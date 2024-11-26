function CardProduct({ item }) {
    // console.log(items)
    return (
        <div className="itemCard">
            <img src={item.images[0]} alt={item.name} className="itemCardThumbnail" />
            <div className="itemSummary">
                <h2 className="itemName">{item.name}</h2>
                <p className="itemPrice">{item.price.toLocaleString()}원</p>
                <div className="favoriteCount">
                    {/* <HeartIcon /> */}
                    {item.favoriteCount}
                </div>
            </div>
        </div>
    )
}

export default CardProduct;
