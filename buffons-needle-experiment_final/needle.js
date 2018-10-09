var D=[];
var angle=[];
var cc=[];
var previous_needle_array_len=0;
var previous_needle_array_len2=0;
var count=0;
// function constructor for needles
function Needle() {
    this.length = length_of_needle;
    if(angle_of_needle=="random")
    this.angle = getRandomArbitrary(0, 180);
    else
        this.angle=angle_of_needle;
    //console.log(this.angle);
    this.cx = getRandomArbitrary(0.5*this.length, 300-0.5*this.length);
    this.cy = getRandomArbitrary(0.5*this.length, 300-0.5*this.length);
    this.x1 = this.cx + 0.5*this.length*Math.cos( degree_to_rads(this.angle) );
    this.y1 = this.cy - 0.5*this.length*Math.sin( degree_to_rads(this.angle) );

    this.x2 = this.cx - 0.5*this.length*Math.cos( degree_to_rads(this.angle) );
    this.y2 = this.cy + 0.5*this.length*Math.sin( degree_to_rads(this.angle) );
    this.near = nearerTo(this.cx,this.cy);
    D.push(Distance_from_Line(this.cy));// returns D
    angle.push(this.angle);
    cc.push(colorChange(this.y1,this.y2));
        
    
}

//creating needles
function create_needles() {
    for(var i = 0; i < number_of_needle; i++){
        var temp = new Needle();
       
        needle_array.push(temp);
        
         
    }
    
}



//finding the closest line to a needle
function nearerTo(cx,cy) {
    
    //finding nearest line
    // line at 100p is A
    // line at 200p is B
    
    if((cy-100)<50){
       // console.log("near A");
        return 'A';
        
        
    }
    else 
        {
            //console.log("near B");
        return 'B';
            
        }
    
}


  
function is_intersecting (needle_array) {
    
    
    
    for(var i=previous_needle_array_len2;i<needle_array.length;i++){
        
        var d = needle_array[i];

        if((d.y1>100 && d.y2<100)||(d.y2>100 && d.y1<100)){
            count++;
            
//            console.log("interescting line A");
            
        }
        
        else if((d.y1>200 && d.y2<200)||(d.y2>200 && d.y1<200)){
            count++;
//            console.log("interescting line B");
            
        }
        
    }
    previous_needle_array_len2=needle_array.length;
    return count;
    
    
}

function colorChange (y1,y2) {
    
    
    
    

        if((y1>100 && y2<100)||(y2>100 && y1<100)){
            
            
            
            return 1;
        }
        
        else if((y1>200 && y2<200)||(y2>200 && y1<200)){
            
            
            return 2;
        }
    return 0;
        
    }
    
  

function Distance_from_Line(cy) {
    
    
    
    if((cy-100)<50){
        
        return (Math.abs(cy-100));
        
        
    }
    else 
        {
            
        return (Math.abs(cy-200));
            
        }
    
}

   




