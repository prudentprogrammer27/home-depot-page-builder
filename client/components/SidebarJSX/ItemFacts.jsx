const ItemFacts = ({descriptions}) => {

    console.log(descriptions)
    return (
        <div className="item-facts sb-parent">
            <ul>
                {descriptions.map((description)=> {
                    return <li key={description.id}>{description.fact}</li>
                })}
                <li><a href="daa">View More Details</a></li>
            </ul>
        </div>
    )
}

export default ItemFacts;