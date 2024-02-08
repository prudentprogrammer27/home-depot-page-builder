

function CReviewHeaderColumn1() {

    return (

        <div className="column1-header">
            <li>
                <div className="list-review-overview">
                    <span className="ratings_avg">4.8</span>
                    <span className="reviewsOverviewHeader">
                        <span className="starsFromReviews">
                            <span><img src="./components/Accordion/CustomerReviewsContent/imgStar/Star.png" alt="Star" style={{ width: '15px', height: '15px' }} /></span>
                            <span><img src="./components/Accordion/CustomerReviewsContent/imgStar/Star.png" alt="Star" style={{ width: '15px', height: '15px' }} /></span>
                            <span><img src="./components/Accordion/CustomerReviewsContent/imgStar/Star.png" alt="Star" style={{ width: '15px', height: '15px' }} /></span>
                            <span><img src="./components/Accordion/CustomerReviewsContent/imgStar/Star.png" alt="Star" style={{ width: '15px', height: '15px' }} /></span>
                            <span><img src="./components/Accordion/CustomerReviewsContent/imgStar/Star.png" alt="Star" style={{ width: '15px', height: '15px' }} /></span>
                        </span>
                        <span className="outOfTotalReviews">out of xx reviews</span>
                    </span>
                </div>
            </li>
            {/* <li className="recommendWrapper">
                <span className="percentageOfRec">94%</span>
                <span className="recommendProduct">recommend this product</span>
            </li> */}

        </div>
    )
}

export default CReviewHeaderColumn1;

    //create function for average ratings =4.8
    
    //create function for total reviews=xx

    //create function for percentageOfRec=94%