var colors = generateRandomColors();
var squares = $('.square')
var pickedColor = colors[getRandomInt(6)]
var title = $('.rgb');
var messageDisplay = $("#msg");
var reset_btn = $('#reset')
var head = $('.head')

title.html(pickedColor)

function resetf() {
    var colors = generateRandomColors();
    head.css("background-color", "#BCCEF8");
    pickedColor = colors[getRandomInt(6)]
    title.html(pickedColor)
    reset_btn.html("NEW COLOR")
    messageDisplay.html("")
    for (var i = 0; i < 6; i++) {
        squares[i].style.background = colors[i];
        $(squares[i]).click(function (e) {
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                messageDisplay.html("Correct!")
                reset_btn.html("Play Again?")
                changeall(clickedColor)
                head.style.background = this.style.background
            }
            else {
                this.style.background = "#232323"
                messageDisplay.html("Try Again")
            }
        });
    }
}
reset_btn.click(function (e) {
    resetf();
});

for (var i = 0; i < 6; i++) {
    squares[i].style.background = colors[i];
    $(squares[i]).click(function (e) {
        var clickedColor = this.style.background;
        if (clickedColor === pickedColor) {
            messageDisplay.html("Correct!")
            reset_btn.html("Play Again?")
            changeall(clickedColor)
            head.css("background-color", clickedColor);
        }
        else {
            this.style.background = "#232323"
            messageDisplay.html("Try Again")
        }

    });
}


// function
function changeall(color) {
    for (var i = 0; i < 6; i++) {
        squares[i].style.background = color
    }
}
function generateRandomColors() {
    var arr = [];
    for (var i = 0; i < 6; i++) {
        arr[i] = randomColor();
    }
    return arr;
}

function randomColor() {
    var a = getRandomInt(255)
    var b = getRandomInt(255)
    var c = getRandomInt(255)
    return "rgb(" + a + ", " + b + ", " + c + ")";
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
