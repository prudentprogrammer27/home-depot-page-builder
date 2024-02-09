import CustomerReviewsChart from "./CustomerReviewsChart";
import CReviewHeaderColumn1 from "./CReviewHeaderColumn1";
import "./CustomerReviewsContent.css";

function CustomerReviewsContent() {

    return (
      <div className="accordion-wrapper">
        <section>
          <div className="ratings-and-reviews">
            <div className="customer-review-header">
              <CReviewHeaderColumn1 />
              <CustomerReviewsChart />
              <div className="CReviewHeaderColumn3">
                <button className="write-review-button">Write a Review</button>
              </div>

            </div>

          </div>
        </section>

      </div>
      
      );
    }
    
    export default CustomerReviewsContent;
    
    
