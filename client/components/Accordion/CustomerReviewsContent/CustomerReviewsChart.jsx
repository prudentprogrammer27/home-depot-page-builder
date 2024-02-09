import React, { useEffect } from 'react';

const CustomerReviewsChart = ({ ratings }) => {
    useEffect(() => {
        const ctx = document.getElementById('homeDepotChart').getContext('2d');

        new window.Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
                datasets: [
                    {
                        data: ratings,
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
                        max: Math.max(...ratings) + 10, 
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
    }, [ratings]);

    return (
        <div>
            <canvas id="homeDepotChart" width="400" height="200"></canvas>
        </div>
    );
};

export default CustomerReviewsChart;


