import React, { useEffect } from 'react';
import { useAppContext } from '../../AppContext';

const CustomerReviewsChart = () => {
    const { reviews } = useAppContext();
    useEffect(() => {
        const dynamicRatings = [0, 0, 0, 0, 0];
        reviews.forEach((review) => {
            dynamicRatings[5 - review.rating]++;
        });

        const ctx = document.getElementById('homeDepotChart').getContext('2d');

        new window.Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
                datasets: [
                    {
                        data: dynamicRatings,
                        backgroundColor: 'rgb(247, 100, 3)',
                        borderColor: 'rgb(247, 100, 3)',
                        borderWidth: 1,
                        borderRadius: 15,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        beginAtZero: true,
                        max: Math.max(...dynamicRatings) + 5, 
                        display: false,
                    },
                   
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                indexAxis: 'y',
            },
        });
    }, [reviews]);

    return (
        <div className="chartContainer">
            <canvas id="homeDepotChart" width="400" height="200"></canvas>
        </div>
    );
};

export default CustomerReviewsChart;