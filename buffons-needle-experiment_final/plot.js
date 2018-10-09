function plot(){          // plot() creates a empty traces(each trace is an object containing x ,y ,type info).
                          
    var trace1 = {
      x: [], 
      y: [], 
      type: 'line'
    };

    var trace2 = {
        x: [],
        y: [],
        type: 'line',
        name: 'PI'
    }
    
    var data = [trace1, trace2];
    myLineChart=Plotly.newPlot('graph', data);
}


//this updatePlot function updates empty x and y of traces ( here 1st and 2nd trace)
function updatePlot(){
    var data = document.getElementById('graph').data;
    data[0].x = num_needles_array;
    data[0].y = pi_value_array;

    data[1].x = [0, total_needle];
    data[1].y = [0, total_needle].map(d => { return 22.0/7 });
    
    Plotly.redraw('graph'); ///will redraw the graph with updated values retaining previous trace.
}