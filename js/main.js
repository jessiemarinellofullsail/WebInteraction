//alert("am i here?");
/*
 Name: Jessie Marinello
 Date: September 11, 2014
 Class & Section:  WIA-####
 Comments: "HTML5 Canvas Drawing"
*/

/*******************************************
 HTML5 Shape Drawing Activity
 1.  Setup the canvas and 2d context
 2.  Draw out each shape in the sections below

 ********************************************/

/*******************************************
 FILE SETUP

 // Setup up 7 different Canvases in index.html one for each problem.
 //Link Modernizr.js
 // Link the main.js file
 // Setup the call to that canvas and get it's 2d context
 //Use Modernizr to verify that your browser supports canvas, include a fallback message

 /*******************************************
 PART 1
 Draw a rectangle starting at point (0 ,0)
 That has a width of 50 px and a height of 100px
 Set the color of the rectangle to a shade of blue.
 Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

 Reminder - set the style first then draw.
 ********************************************/

//Draw Rectangle here
window.onload = function() {
    var theCanvas = document.getElementById("Rectangle1");
    if (theCanvas) {
        var ctx = theCanvas.getContext("2d");

        if (ctx) {
            //Fill
            ctx.strokeStyle = "black";
            ctx.fillStyle = "blue";
            ctx.lineWidth = 5;

            ctx.strokeRect(10, 0, 50, 100);
            ctx.fillRect(10, 0, 50, 100);
        }
    }


/*******************************************
 PART 2
 Draw a circle starting at point (50 ,50)
 That has a radius of 20 px
 Set the color of the circle to a shade of red and set the alpha to .5
 Set the stroke color to black and use a radius of 30px for this circle.

 Reminder - set the style first then draw.
 Use the arc method
 ********************************************/

//Draw Circle here
var theCanvas2 = document.getElementById("Circle1");
    if (theCanvas2 && theCanvas2.getContext){
        var ctx = theCanvas2.getContext("2d");
        if(ctx){
           ctx.strokeStyle = "black";
           ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
           ctx.lineWidth = 5;

           var degrees = 360;
           var radians = (degrees/180)*Math.PI;

           ctx.beginPath();
           ctx.arc(50, 50, 20, 0, radians);
           ctx.fill();
           ctx.stroke();
        }
    }

/*******************************************
 PART 3
 Practice using Path drawing.
 Create a 5-point star shaped pattern using the lineTo method.
 Begin this shape at (100, 100)

 Height and width and color are up to you.
 ********************************************/

//Draw Star here
var theCanvas3 = document.getElementById("Star1");
    if (theCanvas3 && theCanvas3.getContext) {
        var ctx = theCanvas3.getContext("2d");
        if (ctx) {
            ctx.fillStyle = "gold";
            ctx.beginPath();
            ctx.moveTo(107.8, 0.0);
            ctx.lineTo(141.2, 67.5);
            ctx.lineTo(215.7, 78.3);
            ctx.lineTo(161.8, 130.9);
            ctx.lineTo(174.5, 205.1);
            ctx.lineTo(107.8, 170.1);
            ctx.lineTo(41.2, 205.1);
            ctx.lineTo(53.9, 130.9);
            ctx.lineTo(0.0, 78.3);
            ctx.lineTo(74.5, 67.5);
            ctx.lineTo(107.8, 0.0);
            ctx.closePath();
            ctx.fill();
        }
    }

/*******************************************
 PART 4

 Practice drawing with Bezier curves.
 Try drawing the top to an umbrella.
 This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

 Position, height, width and color are your choice.
 Do not overlap any other object.
 ********************************************/

//Draw Umbrella top here
    var theCanvas4 = document.getElementById("Umbrella1");
    if (theCanvas4 && theCanvas4.getContext) {
        var ctx = theCanvas4.getContext("2d");
        if (ctx) {
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 5;

            //Stroke a simple bezier curve
            ctx.beginPath();
            ctx.moveTo(50,200);

            //bezierCurveTo(cx1, cy1, cx2, cy2, x, y )

            ctx.bezierCurveTo(50,100, 200, 300, 200, 150);

            ctx.stroke();


            //quadratic curve
            ctx.beginPath();
            ctx.moveTo(400,200);

            //quadraticCurveTo(cx, cy, x, y)

            ctx.quadraticCurveTo(500,100, 600, 150);
            ctx.stroke();



        }
    }


            /*******************************************
 PART 5

 Practice using text.
 Draw text into your canvas.  It can said whatever you would like in any color.

 ********************************************/

//Draw text here

/*******************************************
 PART 6

 Pixel manipulation.
 Draw the image logo.png into the canvas in the following 3 ways.
 1. The image exactly as it is.
 2. Shrink the image by 50%
 3. Slice a section of the logo out and draw that onto the canvas.

 Reminder to use the drawImage method for all 3 of the ways.

 ********************************************/

//Draw images here


/*******************************************
 PART 7

 Putting it all together.

 Using a combination of all the methods.
 Create a complex scene.
 You must use at least 3 different methods.

 ********************************************/

// Draw scene here

}