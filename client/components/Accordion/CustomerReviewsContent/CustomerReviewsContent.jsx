import CustomerReviewsChart from "./CustomerReviewsChart";
import CReviewHeaderColumn1 from "./CReviewHeaderColumn1";
import "./CustomerReviewsContent.css";
import CustomerImageCarousel from "./CustomerImageCarousel";

function CustomerReviewsContent({ currentProduct }) {

  const handleClick = (e) => {
    e.stopPropagation();
  }
  
    return (
      <div className="accordion-wrapper" >
        <section onClick={handleClick}>
          <div className="ratings-and-reviews" >
            <div className="customer-review-header">
              <CReviewHeaderColumn1 />
              <CustomerReviewsChart />
              <div className="CReviewHeaderColumn3">
                <button className="write-review-button">Write a Review</button>
              </div>
            </div>
            <CustomerImageCarousel currentProduct={currentProduct} />

          </div>
        </section>

      </div>
      
      );
    }
    
    export default CustomerReviewsContent;
    
    
