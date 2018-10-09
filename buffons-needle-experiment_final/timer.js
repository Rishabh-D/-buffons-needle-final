

var timer; 

function cbf(){
    var x= document.getElementById("needle_numbers");
    var y=document.getElementById('input_length');
    var z=document.getElementById("input_angle");
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

function Animate(){
   timer= d3.interval(cbf,500);
    
    
}
