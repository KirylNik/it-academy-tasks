const canvas = document.getElementById("myCanvas"), 
context = canvas.getContext("2d");
context.strokeStyle = "red";

var paint = {
    I: function (x, y, context) {
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.closePath();
        context.stroke();
    
        context.beginPath();
        context.moveTo(x, y+15);
        context.lineTo(x, y+235);
        context.stroke();
    },
    K: function (x, y, context) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x, x+240);
        context.lineTo(x, x+120);
        context.lineTo(x+120, x);
        context.lineTo(x, x+120);
        context.lineTo(x+120, x+240);
        context.stroke();
    },
    L: function (x, y, context) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x, y+240);
        context.lineTo(x+120, y+240);
        context.stroke();
    },
    R: function (x, y, context) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x, y+240);
        context.lineTo(x, y+120);
        context.lineTo(x+120, y+240);
        context.lineTo(x, y+120);
        context.arc(x, y+120, 120, 0, Math.PI/0.286, true);
        context.stroke();
    }
}

paint.K(30, 30, context);
paint.I(230, 35, context);
paint.R(280, 30, context);
paint.I(430, 35, context);
paint.L(460, 30, context);
paint.L(610, 30, context);




