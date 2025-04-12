const tradeChanceChartCtx = document.getElementById('tradeChanceChart').getContext('2d');
const tradeChanceChart = new Chart(tradeChanceChartCtx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Sample Data',
      data: [12, 19, 3, 5, 2, 85],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        min: 0,
        max: 100,
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          count: 6
        }
      }
    }
  }
});
