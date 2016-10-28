scale = 150;

// K33
a = 1 / Math.sqrt(3);
r = 2 * a / Math.sqrt(3);
h = a / Math.sqrt(3);

// Draw hexagon
data = []
for (var i = 0; i < 7; i++) {
    var angle = i * Math.PI / 3;
    data.push({
        "x": scale*a*Math.cos(angle),
        "y": scale*a*Math.sin(angle)
    })
}

var line = d3.line()
    .x(function (d) { return d.x; })
    .y(function (d) { return d.y; });
d3.select("#k33").append("path")
    .attr("d", line(data));

// Draw arcs
var arc = d3.arc()
    .innerRadius(scale*r)
    .outerRadius(scale*r)
    .startAngle(- 2*Math.PI / 3)
    .endAngle(2*Math.PI / 3);
    
d3.select("#k33")
    .append("g")
        .attr("transform", "translate(0,"+(-scale*h)+")")
        .append("path").attr("d", arc);
d3.select("#k33")
    .append("g").attr("transform", "rotate(120)")
        .append("g").attr("transform", "translate(0,"+(-scale*h)+")")
        .append("path").attr("d", arc);
d3.select("#k33")
    .append("g").attr("transform", "rotate(240)")
        .append("g").attr("transform", "translate(0,"+(-scale*h)+")")
        .append("path").attr("d", arc);
    
// Draw points
for (var i = 0; i < 6; i++) {
    var angle = i * Math.PI / 3;
    d3.select("#k33")
        .append("circle")
            .attr("cx", scale*a*Math.cos(angle))
            .attr("cy", scale*a*Math.sin(angle));
}

// K5
a = 2 / (Math.sqrt(5) + 1);
r = a;
h = a * (Math.sqrt(5) - 1) / 2;

// Draw pentagon
data = []
for (var i = 0; i < 6; i++) {
    var angle = -Math.PI/2 + i * 2 * Math.PI / 5;
    data.push({
        "x": scale*a*Math.cos(angle),
        "y": scale*a*Math.sin(angle)
    })
}

var line = d3.line()
    .x(function (d) { return d.x; })
    .y(function (d) { return d.y; });
d3.select("#k5").append("path")
    .attr("d", line(data));

// Draw arcs
var arc = d3.arc()
    .innerRadius(scale*r)
    .outerRadius(scale*r)
    .startAngle(- 3 * Math.PI / 5)
    .endAngle(3*Math.PI / 5);
    
d3.select("#k5")
    .append("g")
        .attr("transform", "translate(0,"+(-scale*h)+")")
        .append("path").attr("d", arc);
d3.select("#k5")
    .append("g").attr("transform", "rotate(72)")
        .append("g").attr("transform", "translate(0,"+(-scale*h)+")")
        .append("path").attr("d", arc);
d3.select("#k5")
    .append("g").attr("transform", "rotate(144)")
        .append("g").attr("transform", "translate(0,"+(-scale*h)+")")
        .append("path").attr("d", arc);
d3.select("#k5")
    .append("g").attr("transform", "rotate(216)")
        .append("g").attr("transform", "translate(0,"+(-scale*h)+")")
        .append("path").attr("d", arc);
d3.select("#k5")
    .append("g").attr("transform", "rotate(288)")
        .append("g").attr("transform", "translate(0,"+(-scale*h)+")")
        .append("path").attr("d", arc);

// Draw points
for (var i = 0; i < 5; i++) {
    var angle = -Math.PI/2 + i * 2 * Math.PI / 5;
    d3.select("#k5")
        .append("circle")
            .attr("cx", scale*a*Math.cos(angle))
            .attr("cy", scale*a*Math.sin(angle));
}

nodeRadius = 7;
lineThickness = 4;

update = function() {
    d3.selectAll("path")
        .attr("stroke", "black")
        .attr("stroke-width", lineThickness)
        .attr("fill", "none");
    
    d3.selectAll("circle")
        .attr("r", nodeRadius)
        .attr("fill", "white")
        .attr("stroke", "black")
        .attr("stroke-width", lineThickness)    
}
update()
