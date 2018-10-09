var canvas = {};

canvas.render_needles = function(){
    this.svg = d3.select('#needle_svg');

    for( var i = previous_needle_array_len; i < needle_array.length; i++){
        var d = needle_array[i];
        var x1 = d.cx + 0.5*d.length*Math.cos( degree_to_rads(d.angle) );
        var y1 = d.cy - 0.5*d.length*Math.sin( degree_to_rads(d.angle) );

        var x2 = d.cx - 0.5*d.length*Math.cos( degree_to_rads(d.angle) );
        var y2 = d.cy + 0.5*d.length*Math.sin( degree_to_rads(d.angle) );
        var r  = colorChange(y1,y2);

        var color = null;
        if(r==1 || r==2){ color = 'red'; } else { color = '#008F68'; }

        this.svg.append('line')
            .attrs({ 'x1': x1, y1: y1, x2: x2, y2: y2, class: 'needle' })
            .styles({ 'stroke': color, 'stroke-width': 1.5 });
        
    }
    previous_needle_array_len=needle_array.length;
    
}
