var m=0;
var q=0;
var a=0;
var needle_array = [];
var number_of_needles =0;
var length_of_needles=100;
var angle_needle="random";
var N_P_HS=0;

var num_needles_array = [];
var pi_value_array = [];

function setup(){
    create_needles();
    canvas.render_needles();
    plot();
    updatePlot();
    
}

$(document).ready(function(){
    setup();
})


//var m=is_intersecting(needle_array);

//l=m/number_of_needles;

//var q=(2*100)/(100*l);

function erase(){
    console.log('clear called');
    d3.selectAll('.needle').remove();
    a = 0; q = 0; m = 0;
    needle_array = []; number_of_needles = 0;
    num_needles_array = []; pi_value_array = [];
    cc=[];
    D=[];
    angle=[];
    previous_needle_array_len=0;
    previous_needle_array_len2=0;
    count=0;
    result();
    
    
}