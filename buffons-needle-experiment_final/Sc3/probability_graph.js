var nearTo;        
var width_canvas=Math.PI*100+20+20;
        var c = document.getElementById("myCanvas");

        c.setAttribute("width",width_canvas);
        var ctx = c.getContext("2d");

        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.beginPath();
        ctx.moveTo(0,200);
        ctx.lineTo(Math.PI*100+20+20,200);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(20,0);
        ctx.lineTo(20,220);
        ctx.stroke();
        ctx.closePath();


        ctx.font="16px arial";

        ctx.fillStyle = "#8A0651";
        ctx.fillText("L/2",-1.5,15);
        ctx.fillStyle = "blue";
        ctx.fillText("^",5,88);
        ctx.fillText("^",5,93);
        ctx.fillText("D",5,100);
         ctx.fillStyle = "#8A0651";
        ctx.fillText("0",5,215);
        ctx.fillText("𝜋",Math.PI*100+10,212);
//        ctx.fillStyle = "blue";
//        ctx.fillText("angle of needle >>",150,218);


// sine graph 0 to PI
//        for(var i=0.01;i<Math.PI.toFixed(2);i+=0.01){
//        var length_of_needle=100;
//        var angle_of_needle;
//            angle_of_needle=i;
//           var x=(100)*(angle_of_needle);
//           var y=(4)*(length_of_needle/2)*Math.sin(angle_of_needle);
//           ctx.fillStyle = 'blue';
//           ctx.beginPath();
//           ctx.arc(x+20, 200-y, 1, 0, 2*Math.PI);
//           ctx.fill();
//           ctx.closePath();
 //
 //       }

function second_plot(){


        var y;
        var length_of_needle=100;
        var angle_of_needle;
            angle_of_needle=angles;
            
            
            var x=(100)*Math.PI*(angle(X1,Y1,X2,Y2))/180;
            //console.log(x);
    
          var cy=(parseFloat(Y1)+parseFloat(Y2))/2;
          
          if((cy-100)<50)
              nearTo="A";
           else
               nearTo="B";
    
           if(nearTo=="A"){
           y=(4)*Math.abs(cy-100);
           //console.log(y);
           }
           else{
           y=(4)*Math.abs(cy-200);
               //console.log(y);
           }
    
    
            if(color!=0){ ctx.fillStyle = 'red'; } else { ctx.fillStyle = '#008F68'; }

           ctx.beginPath();
           ctx.arc(x+20, 200-y, 1, 0, 2*Math.PI);
           ctx.fill();
           ctx.closePath();
    
    
//     sine graph 0 to PI
        for(var i=0.01;i<Math.PI.toFixed(2);i+=0.01){
        var length_of_needle=100;
        var angle_of_needle;
            angle_of_needle=i;
           var x=(100)*(angle_of_needle);
           var y=(4)*(length_of_needle/2)*Math.sin(angle_of_needle);
           ctx.fillStyle = '#D2D2D3';
           ctx.beginPath();
           ctx.arc(x+20, 200-y, 1, 0, 2*Math.PI);
           ctx.fill();
           ctx.closePath();
            




        }
}
 