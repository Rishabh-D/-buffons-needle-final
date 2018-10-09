function user_input(x,y,z){
    number_of_needles=+x.value;
    length_of_needles=+y.value;
    
    if(z.value=="")
    angle_needle="random";
    else
    angle_needle=z.value;
    setup();
    
    a=a+number_of_needles;
    m=is_intersecting(needle_array);
    
    var l=m/a;

    q=(2*length_of_needles)/(100*l);

    num_needles_array.push(a);
    pi_value_array.push(q);
    
    result();
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
 ev.dataTransfer.setData("text", "drag1");
  
    //document.getElementById("myneedle2").style.cursor = "move";
}


function drop(ev) {
    ev.preventDefault();
    var x= document.getElementById("needle_number");
    var y=document.getElementById('needle_length_user');
    var z=document.getElementById("needle_angle_user");
    w=Number.isInteger(+x.value)
    //e=if(+x.value>0){};
    if(w){
        if(+x.value>0){
            
        user_input(x,y,z);
            
        }
        else
            alert("INVALID NUMBER OF NEEDLES");
    }
    else 
        alert("(@_@) Enter POSITIVE INTEGERS ONLY");   
}