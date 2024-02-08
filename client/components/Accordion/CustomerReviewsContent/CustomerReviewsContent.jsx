import CustomerReviewsChart from "./CustomerReviewsChart";
import CReviewHeaderColumn1 from "./CReviewHeaderColumn1";
import "./CustomerReviewsContent.css";

function CustomerReviewsContent() {

  const ratings = [10, 15, 8, 5, 3];
    return (
      <div className="accordion-wrapper">
        <section>
          <div className="ratings-and-reviews">
            <div className="customer-review-header">
              <CReviewHeaderColumn1 />
              <CustomerReviewsChart ratings = {ratings} />

            </div>

          </div>
        </section>

      </div>
      
      );
    }
    
    export default CustomerReviewsContent;
    
    
