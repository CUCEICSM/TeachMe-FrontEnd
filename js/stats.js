function topicsChart(){
  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawViews);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
}

function drawViews() {
  $('#chart_general').html("");

  var data = google.visualization.arrayToDataTable([
    ['Dia', 'Visitas'],
    ['Octubre', 501],
    ['Noviembre', 1011],
    ['Diciembre', 897],
    ['Enero', 2560],
    ['Febrero', 3024],
    ['Marzo', 5200]
  ]);

  var options = {
    title: 'Visitas mensuales',
    curveType: 'function',
    legend: { position: 'bottom' },
    'backgroundColor':"#F0F0F0",
    'forceIFrame':true,
    'chartArea':{left:"40",
                 top:"25",
                 width:'100%',
                 height:'70%'},
    'fontSize':"10px"
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_general'));

  chart.draw(data, options);
}
