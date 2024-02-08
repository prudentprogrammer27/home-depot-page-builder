import CustomerReviewsChart from "./CustomerReviewsChart";

function CustomerReviewsContent() {

  const ratings = [10, 15, 8, 5, 3];
    return (
      <div>
        <CustomerReviewsChart ratings = {ratings} />
        <p>This is where customer reviews details go.</p>
      </div>
    );
}
  
export default CustomerReviewsContent;