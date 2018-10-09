//(100*Math.sin(Math.PI*45/180))
var p;
var i=1;
var Y1;
var Y2;
var X1,X2;
var height=100;
var color;
function makeDraggable(evt){
  var selectedElement = false;
  var offset;
  var svg = evt.target;
  svg.addEventListener('mousedown', startDrag);
  svg.addEventListener('mousemove', drag);
  svg.addEventListener('mouseup', endDrag);
  svg.addEventListener('mouseleave', endDrag);
}
    
     function startDrag(evt) {
          if (evt.target.classList.contains('draggable2')){
          selectedElement = evt.target;
          console.log(selectedElement);
          offset = getMousePosition(evt);
          offset.x -= parseFloat(selectedElement.getAttributeNS(null, "x1"));
          offset.y -= parseFloat(selectedElement.getAttributeNS(null, "y1"));
    
      }
    }
    
function getMousePosition(evt) {
     var CTM = svg.getScreenCTM();
     return {
      x: (evt.clientX - CTM.e) / CTM.a,
      y: (evt.clientY - CTM.f) / CTM.d
  };
}
    
    
     function drag(evt) {
         
         if (selectedElement) {
            evt.preventDefault();
            var coord = getMousePosition(evt);
              

                 
          selectedElement.setAttributeNS(null,"x1",coord.x - offset.x);
          selectedElement.setAttributeNS(null,"y1",coord.y - offset.y);
         
          selectedElement.setAttributeNS(null, "x2", coord.x - offset.x);
          selectedElement.setAttributeNS(null, "y2", coord.y+height - offset.y);

             
            
        } 
    }
    
    
     function endDrag(evt) {
         selectedElement = null;
    }


function colorChange (y1,y2) {
  
        if((y1>=100 && y2<=100)||(y2>=100 && y1<=100)){
            
            
            
            return 1;
        }
        
        else if((y1>=200 && y2<=200)||(y2>=200 && y1<=200)){
            
            
            return 2;
        }
    return 0;
        
    }

function length(x1,y1,x2,y2){
   var X=Math.pow((x1-x2),2);
    var Y=Math.pow((y1-y2),2);
    var r=X+Y;
    return Math.sqrt(r);
    
}

function angle(x1,y1,x2,y2){
    
    return -(180/Math.PI)*(Math.atan2((y2-y1),(x2-x1)));
    
}

    