function createCircle(element, color) {
    var ctx = element.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

function refresh(qtd, color) {
    $( ".row" ).html("");
    for(var i = 0; i < qtd; i++) {
        $("#circle-area ").append("<canvas width='150' height='150' class='circle'/>");
        createCircle($("#circle-area .circle:last").get(0), color);
    }
}