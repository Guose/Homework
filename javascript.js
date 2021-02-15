var btn = document.getElementById("btn");
var div = document.getElementById("div");
var color = div.style.backgroundColor;

btn.addEventListener("click", function() {    

    if (color == "White") {
        div.style.backgroundColor = "Black";
        console.log("Write to the log: ", div.style.backgroundColor);
        color = "Black";
    }

    else if (color == "Black") {
        div.style.backgroundColor = "Blue";
        console.log("Write to the log: ", div.style.backgroundColor);
        color = "Blue";
    }

    else {
        div.style.backgroundColor = "White";
        console.log("Write to the log: ", div.style.backgroundColor);
        color = "White";
    }
});