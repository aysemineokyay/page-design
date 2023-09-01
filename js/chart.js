let ctx=document.getElementById("myChart");

const labels = ['January','February','March','April','May','June','July'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Gain',
      data: [10,58,73,54,59,11,60],
      borderColor: "#FFDBAA",
      backgroundColor: "#FFDBAA",
    },
    {
      label: 'Lost',
      data: [-9,-35,-23,-36,-5,-17,-55],
      borderColor: "#BB2525",
      backgroundColor: "#BB2525",
    }
  ]
};
new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        plugins: {          
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 12
                    }
                },
      }}
    }});