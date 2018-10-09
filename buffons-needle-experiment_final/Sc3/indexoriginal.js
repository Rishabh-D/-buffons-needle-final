var X;
var Y;
var X1=100,X2=40,Y1=100,Y2=180;
var CX,CY;
var height=100;
var color;
var i=1;
var angles=0;
var b=false;
var lastScrollTop = 0;
var lengths=0;

function makeDraggable(evt) {
  var selectedElement = false;
  var offset;
  var svg = evt.target;
  svg.addEventListener('mousedown', startDrag);
  svg.addEventListener('mousemove', drag);
  svg.addEventListener('mouseup', endDrag);
  svg.addEventListener('mouseleave', endDrag);

  function startDrag(evt) {
  if (evt.target.classList.contains('draggable')) {
    selectedElement = evt.target;
      
      
    offset = getMousePosition(evt);
    offset.x -= parseFloat(selectedElement.getAttributeNS(null, "x1"));
    offset.y -= parseFloat(selectedElement.getAttributeNS(null, "y1"));
  }
          
  }
  function drag(evt) {
  if (selectedElement) {
    evt.preventDefault();
    var coord = getMousePosition(evt);
      
      X1=selectedElement.getAttributeNS(null,"x1");
      //console.log(X1);
      Y1=selectedElement.getAttributeNS(null,"y1");
      //console.log(Y1);                                
      X2=selectedElement.getAttributeNS(null,"x2");
      //console.log(X2);
      Y2=selectedElement.getAttributeNS(null,"y2");
      //console.log(Y2);
      var x= coord.x-offset.x;
      var y= coord.y-offset.y;
      selectedElement.setAttributeNS(null,"x1",x);
      selectedElement.setAttributeNS(null,"y1",y);
      
      selectedElement.setAttributeNS(null, "x2", x - (X1-X2));
      //console.log(coord.x - offset.x+  (X1-X2));
      X2=selectedElement.getAttributeNS(null,"x2");
      //console.log(X2);
      selectedElement.setAttributeNS(null, "y2", y + (Y2-Y1));
      
      X1=selectedElement.getAttributeNS(null,"x1");
      //console.log(X1);
      Y1=selectedElement.getAttributeNS(null,"y1");
      //console.log(Y1);                                
      X2=selectedElement.getAttributeNS(null,"x2");
      //console.log(X2);
      Y2=selectedElement.getAttributeNS(null,"y2");
      
      
      angles=angle(X1,Y1,X2,Y2);
      lengths=length(X1,Y1,X2,Y2);
      //console.log(angles.toFixed(2));
      //console.log(lengths);
      
      color=colorChange(Y1,Y2)
      if(color!=0)
          selectedElement.setAttributeNS(null,"stroke","red");
      else
          selectedElement.setAttributeNS(null,"stroke","green");
      
      second_plot();
      resolve();
      
    document.getElementById("ang").innerHTML="angle (&#920)  = "+angles.toFixed(2);
      var cy=(parseInt(Y1)+parseInt(Y2))/2;
      if((cy-100)<50)
    document.getElementById("dis").innerHTML="distance from nearest line = "+Math.abs(cy-100);
      else
     document.getElementById("dis").innerHTML="distance from nearest line = "+Math.abs(cy-200);
          
 
  }// if ends here 

}// drag()
  function endDrag(evt) {
  selectedElement = null;
}

function getMousePosition(evt) {
  var CTM = svg.getScreenCTM();
  return {
    x: (evt.clientX - CTM.e) / CTM.a,
    y: (evt.clientY - CTM.f) / CTM.d
  };
}
    
}// makeDraggable

function colorChange(Y1,Y2) {

        if(Y1<100 && Y2>100){

            return 1;
        }
        
        else if(Y1<200 && Y2>200){
            
            
            return 2;
        }
    return 0;
        
    }

function angle(x1,y1,x2,y2){    
    return (180/Math.PI)*(Math.atan2((y2-y1),(x1-x2)));   
}





b=document.getElementById("svg1");
b.addEventListener("wheel", function(evt){
    
    evt.preventDefault();
    
   var delta;

        if (event.wheelDelta){
            delta = event.wheelDelta;
        }else{
            delta = -1 * event.deltaY;
        }

        if (delta < 0){
            
        
            
        b=document.getElementById("line1");
            
      X1=b.getAttributeNS(null,"x1");
      //console.log(X1);
      Y1=b.getAttributeNS(null,"y1");
      //console.log(Y1);                                
      X2=b.getAttributeNS(null,"x2");
      //console.log(X2);
      Y2=b.getAttributeNS(null,"y2");
            
            CX=(parseFloat(X1)+parseFloat(X2))/2;
            CY=(parseFloat(Y1)+parseFloat(Y2))/2;
            
      
      
      angles=angle(X1,Y1,X2,Y2);
        var NewX2=parseFloat(b.getAttributeNS(null,"x2"));
        var NewY2 =parseFloat(b.getAttributeNS(null,"y2"));
            //console.log(NewX2+" "+NewY2);
            
            if((angles+i)>=180)
               { angles=180;
                i=0;
               }
            var radians= (angles+parseInt(i))*Math.PI/180;
            //console.log(angles+parseInt(i));
            
                
            var a=50*Math.cos(radians).toFixed(2);
            var c=50*Math.sin(radians).toFixed(2);
            //console.log((CX+a)+"  "+(CY-c));
            //console.log(a+NewX2);
            //console.log(NewY2-c);
        b.setAttributeNS(null,"x1",CX+a);
        b.setAttributeNS(null,"y1",CY-c); 
        b.setAttributeNS(null,"x2",CX-a);
        b.setAttributeNS(null,"y2",CY+c); 
            
         //console.log(b.getAttribute("x2")+"  "+b.getAttribute("y2"));   
            color=colorChange(Y1,Y2)
      if(color!=0)
          b.setAttributeNS(null,"stroke","red");
      else
          b.setAttributeNS(null,"stroke","green");
      
            i+=0.1;
            //console.log("DOWN");
            second_plot();
            resolve();
            
            document.getElementById("ang").innerHTML="angle (&#920) = "+angles.toFixed(2);
      var cy=(parseFloat(Y1)+parseFloat(Y2))/2;
      if((cy-100)<50)
    document.getElementById("dis").innerHTML="distance from nearest line = "+Math.abs(cy-100);
      else
     document.getElementById("dis").innerHTML="distance from nearest line = "+Math.abs(cy-200);
            
            
             
        }else if (delta > 0){
            
            
        b=document.getElementById("line1");
            
      X1=b.getAttributeNS(null,"x1");
      //console.log(X1);
      Y1=b.getAttributeNS(null,"y1");
      //console.log(Y1);                                
      X2=b.getAttributeNS(null,"x2");
      //console.log(X2);
      Y2=b.getAttributeNS(null,"y2");
            
            CX=(parseFloat(X1)+parseFloat(X2))/2;
            CY=(parseFloat(Y1)+parseFloat(Y2))/2;
      
      
      angles=angle(X1,Y1,X2,Y2);
        var NewX2=parseFloat(b.getAttributeNS(null,"x2"));
        var NewY2 =parseFloat(b.getAttributeNS(null,"y2"));
            //console.log(NewX2+" "+NewY2);
            
            if((angles-i)<=0)
               { angles=0;
                i=0;
               }
            var radians= (angles-parseInt(i))*Math.PI/180;
            //console.log(angles-parseInt(i));
            
                
            var a=50*Math.cos(radians).toFixed(2);
            var c=50*Math.sin(radians).toFixed(2);
            //console.log(a+NewX2);
            //console.log(NewY2-c);
        b.setAttributeNS(null,"x1",CX+a);
        b.setAttributeNS(null,"y1",CY-c); 
        b.setAttributeNS(null,"x2",CX-a);
        b.setAttributeNS(null,"y2",CY+c); 
            
            color=colorChange(Y1,Y2)
      if(color!=0)
          b.setAttributeNS(null,"stroke","red");
      else
          b.setAttributeNS(null,"stroke","green");
      
            i+=0.1;
            second_plot();
            resolve();
            document.getElementById("ang").innerHTML="angle (&#920) = "+angles.toFixed(2);
      var cy=(parseInt(Y1)+parseInt(Y2))/2;
      if((cy-100)<50)
    document.getElementById("dis").innerHTML="distance from nearest line = "+Math.abs(cy-100);
      else
     document.getElementById("dis").innerHTML="distance from nearest line = "+Math.abs(cy-200);
            
            // console.log("UP");
            
        }

}, false);


function length(x1,y1,x2,y2){
   var X=Math.pow((x1-x2),2);
    var Y=Math.pow((y1-y2),2);
    var r=X+Y;
    return Math.sqrt(r);
    
}

function resolve(){
    
    var c=document.getElementById("line1");
    var d=document.getElementById("text");
    var e=document.getElementById("text2");
    
    
    var X1=c.getAttribute("x1");
    var Y1=c.getAttribute("y1");
    var X2=c.getAttribute("x2");
    var Y2=c.getAttribute("y2");
    var angles=angle(X1,Y1,X2,Y2);
    
    
    var CX=(parseFloat(X1)+parseFloat(X2))/2;
    var CY=(parseFloat(Y1)+parseFloat(Y2))/2;
    var a=document.getElementById("line2");
    var b=document.getElementById("line3");
    
    if((CY-100)<50){
       
    
    a.setAttributeNS(null,"x1",CX);
    a.setAttributeNS(null,"y1",CY);
    a.setAttributeNS(null,"x2",X1); 
    a.setAttributeNS(null,"y2",CY);
    
    b.setAttributeNS(null,"x1",X1);
    b.setAttributeNS(null,"y1",CY);
    b.setAttributeNS(null,"x2",X1); 
    b.setAttributeNS(null,"y2",Y1);
    
    if(angles<90){
    d.setAttribute("x",parseFloat(X1)+10);
    d.setAttribute("y",parseFloat(Y1)+20);
        e.setAttribute("x",(parseFloat(CX)+parseFloat(X1))/2 - 4);
        e.setAttribute("y",parseFloat(CY)-1);
        
    }
    else{
        d.setAttribute("x",parseFloat(X1)-50);
    d.setAttribute("y",parseFloat(Y1)+20);
        e.setAttribute("x",(parseFloat(CX)+parseFloat(X1))/2 + 4);
        e.setAttribute("y",parseFloat(CY)-1);
        
        
    }
    }
    else
        {
            
    a.setAttributeNS(null,"x1",X2);
    a.setAttributeNS(null,"y1",Y2);
    a.setAttributeNS(null,"x2",CX); 
    a.setAttributeNS(null,"y2",Y2);
    
    b.setAttributeNS(null,"x1",CX);
    b.setAttributeNS(null,"y1",Y2);
    b.setAttributeNS(null,"x2",CX); 
    b.setAttributeNS(null,"y2",CY);
    
    if(angles<90){
    d.setAttribute("x",parseFloat(CX)+10);
    d.setAttribute("y",parseFloat(CY)+20);
         e.setAttribute("x",(parseFloat(CX)+parseFloat(X2))/2 - 4);
        e.setAttribute("y",parseFloat(Y2)-1);
    }
    else{
        d.setAttribute("x",parseFloat(CX)-50);
    d.setAttribute("y",parseFloat(CY)+20);
         e.setAttribute("x",(parseFloat(CX)+parseFloat(X2))/2 - 4);
        e.setAttribute("y",parseFloat(Y2)-1);
        
    }
            
            
            
            
        };
//    
    //console.log(b.getAttribute("x2")+"  "+b.getAttribute("y2"));

    
    
    
    
}
