function drawBackground()
{

    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillRect(0,0, window.innerWidth, window.innerHeight);

    drawSky();
    drawSnow();
    drawMoon();
    drawBuildings();
}

function drawMoon()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(250,90,50,0,2*Math.PI);
    ctx.shadowBlur = 50;
    ctx.shadowColor = "#FFFFFF";
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

}

function drawBuildings()
{


    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.beginPath();
    ctx.moveTo(0,500);
    ctx.lineWidth=180;
    ctx.lineTo(0,250);
    ctx.shadowBlur = 0;
    ctx.strokeStyle = "#4b0b07";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(450,250);
    ctx.lineWidth=105;
    ctx.lineTo(450,500);
    ctx.shadowBlur = 0;
    ctx.strokeStyle = "#4b0b07";
    ctx.stroke();
}

function drawSnow()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(100,40,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(150,100,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(40,100,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    //1A

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(300,100,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(200,40,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(350,40,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    //1B

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(410,100,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(460,40,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    //1C

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(100,170,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(150,230,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(40,230,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    //2A

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(300,230,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(200,170,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(350,170,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    //2B

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(410,230,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(460,170,9,0,2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();

    //2C

}

function drawSky()
{

    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#5b0308";
    ctx.fillRect(0,0,500,100);

    ctx.fillStyle = "#8b030b";
    ctx.fillRect(0,100,500,100);

    ctx.fillStyle = "#9f1007";
    ctx.fillRect(0,200,500,100);

    ctx.fillStyle = "#c7030f";
    ctx.fillRect(0,300,500,100);

    ctx.fillStyle = "#ec0d0f";
    ctx.fillRect(0,400,450,100);

    ctx.fillStyle = "#4b0b07";
    ctx.fillRect(0,450,500,100);

}

var a;
var rectX = 0;
var rectX2 = 450;
var rectX3 = 0;
var rectY = 130;
var rectW = 110;
var rectH = 110;

var pic1 = new Image();
pic1.src = "Img/DA.PNG";

var pic2 = new Image();
pic2.src = "Img/DS.PNG";

var pic3 = new Image();
pic3.src = "Img/D.PNG";

var pic4 = new Image();
pic4.src = "Img/Thorns.PNG";

function initialize()
{
    drawBackground();
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(pic1,rectX,360, rectH,rectW);
    ctx.drawImage(pic2,rectX2,360, rectH,rectW);
    ctx.drawImage(pic3,rectX3,290, 200,200);
    ctx.drawImage(pic4,150,rectY, 200,220);

}

function animate()
{
    a = requestAnimationFrame(animate);
    drawBackground();
    moveCatAnimation();
    checkCatAnimation();
}

function startAnimation()
{
    animate();
}


var moveAmountX = 2;
var moveAmountX2 = 2;
var moveAmountX3 = 1;
var moveAmountY = 1;

function moveCatAnimation()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    rectX = rectX + moveAmountX;
    rectX2 = rectX2 - moveAmountX2;
    rectX3 = rectX3 + moveAmountX3;
    rectY = rectY + moveAmountY;
    ctx.drawImage(pic1,rectX,360, rectH,rectW);
    ctx.drawImage(pic2,rectX2,360, rectH,rectW);
    ctx.drawImage(pic3,rectX3,290, 200,200);
    ctx.drawImage(pic4,150,rectY, 200,220);
}
function checkCatAnimation()
{
    if (rectX > 450) {
        moveAmountX = moveAmountX * (-1);
    }
    if (rectX < 0)
    {
        moveAmountX = moveAmountX * (-1);
    }
    if
    (rectX2 > 0) {
        moveAmountX2 = moveAmountX2 * (-1);
    }
    if (rectX2 < 450)
    {
        moveAmountX2 = moveAmountX2 * (-1);
    }
    if (rectY > 200)
    {
        moveAmountY = moveAmountY * (-1);
    }
    if (rectY < 0) {
        moveAmountY = moveAmountY * (-1);
    }


}

(function()
    {
        'use strict';
        let timeline = 0;

        const interval = setInterval(desaturatedBird, 1000);
        function desaturatedBird()
        {
            timeline++;
            if (timeline > 5)
            {
                clearInterval(interval);
            }

            console.log('working');
        }

        if (rectX3 > 700) {
            moveAmountX3 = moveAmountX3 * (-1);
        }
        if
        (rectX3 < 0)
        {
            moveAmountX3 = moveAmountX3 * (-1);
        }
    }
)
();

function tenToSmall(input1, input2)
{
    num = input1;
    base = input2;
    smallNum ="";

    while (num > 0)
    {
        smallNum = num%base + smallNum;
        num = Math.floor(num/input2);
    }
    if (base !== 2)
    {
        return "Error, base =/= 2";
    }
    return smallNum;
    }

function smallToTen(input1, base)
{
    num = input1;
    base = 2;
    tenNum = 0;
    numLength = num.toString().length;
    while(numLength > 0)
    {
        var denominator = Math.pow(10,(numLength-1));
        var currentDigit = Math.floor(num/denominator);
        tenNum = tenNum + currentDigit*Math.pow(base, numLength-1);
        num = num%denominator;
        numLength--;
    }
    return tenNum;
}
//function baseConverter(input1, input2)
//{
    //var temp1 = tenToSmall(input1, input2);
    //var temp2 = smallToTen(input1, input2);
    //var temp3 = baseConverter(input1, input2);
    //{

    ///}


//}
function calculate(expression)
    {
    var firstNum = Number(expression.substr(0,1));
    var secondNum = Number(expression.substr(2,1));
    var operator = expression.substr(1,1);

    if (operator === '+')
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
        return subNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return mulNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divNums(firstNum, secondNum);
    }
    else if (operator === '²')
    {
        return squareNums(firstNum);
    }
    else if (operator === '√')
    {
        return squareRootNums(firstNum);
    }
    else if (operator === '%')
    {
        return percent(firstNum, secondNum);
    }
    else if (operator === '.');
    {
        return decimal(firstNum, secondNum);
    }
}

function addNums(p1, p2)
{
    return p1 + p2;
}

function subNums(p1, p2)
{
    return p1 - p2;
}

function mulNums(p1, p2)
{
    return p1 * p2;
}
function divNums(p1, p2)
{
    return p1 / p2;
}
function squareNums(p1)
{
    return p1 * p1;
}
function squareRootNums(p1)
{
    if (num === 0)
{
    return Math.sqrt(0);
}
else if (p1 === 1)
    {
         var currentNum = parseInt(p1);
         return Math.sqrt(currentNum);
    }
    else if (num === 2)
    {
        return Math.sqrt(2);
    }
    else if (num === 3)
    {
        return Math.sqrt(3);
    }
    else if (num === 4)
    {
        return Math.sqrt(4);
    }
    else if (num === 5)
    {
        return Math.sqrt(5);
    }
    else if (num === 6)
    {
        return Math.sqrt(6);
    }
    else if (num === 7)
    {
        return Math.sqrt(7);
    }
    else if (num === 8)
    {
        return Math.sqrt(8);
    }
    else if (num === 9)
    {
        return Math.sqrt(9);
    }
}

function percent(p1, p2)
{
    return (p1 * p2) / 100;
}

//function decimal(p1, p2)
//{
    //number1 = parseInt("p1" + "." + "p2");
  // return number1
//}

function quizAnswers ()
{
    var score=0;
    var feedback=[];
    var Q1Answer = document.quiz.a1.value.toLowerCase();
    if (Q1Answer === 'intj')
    {
        score++;
        feedback.push(" Your 1st response is CORRECT! ");
    }
    else
    {
        feedback.push(" Your 1st response is INCORRECT: the correct answer is INTJ! ");
    }
    var Q2Answer = document.quiz.a2.value.toLowerCase();
    if (Q2Answer === 'pancho')
    {
        score++;
        feedback.push(" Your 2nd response is CORRECT! ");
    }
    else
    {
        feedback.push(" Your 2nd response is INCORRECT: the correct answer is Pancho! ");
    }
    if (document.quiz.a3.value === '1')
    {
        score++;
        feedback.push(" Your 3rd response is CORRECT! ");
    }
    else
    {
        feedback.push(" Your 3nd response is INCORRECT: the correct answer is 1! ");
    }
    if (document.quiz.a4.value === 'AP Comp Sci')
    {
        score++;
        feedback.push(" Your 4th response is CORRECT! ");
    }
    else
    {
        feedback.push(" Your 4th response is INCORRECT: the correct answer is Ap Computer Science Principles! ");
    }
    if (document.quiz.a5A.checked === true && document.quiz.a5B.checked === true && document.quiz.a5D.checked === true && document.quiz.a5C.checked === false && document.quiz.a5E.checked === false)
    {
        score++;
        feedback.push(" Your 5th response is CORRECT! ");
    }
    else
    {
        feedback.push(" Your 5th response is INCORRECT: the correct answers are drawing, coding, and writing! ");
    }
    if (document.quiz.a6B.checked === true && document.quiz.a6E.checked === true && document.quiz.a6A.checked === false && document.quiz.a6C.checked === false && document.quiz.a6D.checked === false)
    {
        score++;
        feedback.push(" Your 6th response is CORRECT! ");
    }
    else
    {
        feedback.push(" Your 6th response is INCORRECT: the correct answers are angels and comics! ");
    }
    if (score === 6)
    {
        feedback.push ( "Great job, here's a password: Panchito!");
    }
    alert(score);
    alert(feedback);
}
function passwordReward ()
{
    var pass = String(document.reward.password.value);
    if (pass === 'Panchito')
    {
        return document.getElementById( "gabs" ).style.display = "block";
    }
    else
    {
        return ("Nice try!");
    }
}



//Thank you to the following:
//stackoverflow.com for the temperature bug image feature,
//Andrei CACIO on stackoverflow.com
//and Mr. K for teaching me the basics of JavaScript!

