
const resultsCtx = document.getElementById('resultsChart').getContext('2d');
const resultsChart = new Chart(resultsCtx, {
  type: 'bar',
  data: {
    labels: ['La Liga', 'Champions League', 'Copa del Rey'],
    datasets: [{
      label: 'Trophies Won',
      data: [36, 15, 19],
      backgroundColor: ['#4CAF50', '#FF9800', '#2196F3'],
      borderColor: ['#388E3C', '#F57C00', '#1976D2'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Trophies',
          color: '#333'
        },
        ticks: {
          color: '#333'
        }
      },
      x: {
        ticks: {
          color: '#333'
        }
      }
    }
  }
});


const trophiesCtx = document.getElementById('trophiesChart').getContext('2d');
const trophiesChart = new Chart(trophiesCtx, {
  type: 'pie',
  data: {
    labels: ['La Liga', 'Champions League', 'Copa del Rey'],
    datasets: [{
      label: 'Trophies Distribution',
      data: [36, 15, 19],
      backgroundColor: ['#4CAF50', '#FF9800', '#2196F3']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333'
        }
      }
    }
  }
});


const topScorersCtx = document.getElementById('topScorersChart').getContext('2d');
const topScorersChart = new Chart(topScorersCtx, {
  type: 'bar',
  data: {
    labels: ['Cristiano Ronaldo', 'Raúl', 'Karim Benzema', 'Alfredo Di Stéfano', 'Santillana'],
    datasets: [{
      label: 'Goals Scored',
      data: [450, 323, 324, 308, 290],
      backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300'],
      borderColor: ['#C70039', '#28A745', '#1E90FF', '#FF1493', '#FF8C00'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Goals Scored',
          color: '#333'
        },
        ticks: {
          color: '#333'
        }
      },
      x: {
        ticks: {
          color: '#333'
        }
      }
    }
  }
});

