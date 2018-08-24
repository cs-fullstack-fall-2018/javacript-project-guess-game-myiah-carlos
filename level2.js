var clicks2 = 0;
var targets2 = 8;
var hits2 = 0;

function letsRock2() {
    if(hits2 !== targets2) {
        document.getElementById("level2").disabled = true; //not working right now
    }

    var theGo2 = document.getElementById("goGetIt");
    theGo2.onclick = function () {
        // Get random number of targets and do setup
        var targetKount2 = targets;
        var targetTime2 = 10000;
        // No start the game!
        setUpTargetsAndPlay2(targetKount, targetTime);
    };
}
// Utility function to get a random table cell number
function getRandomInt2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// This function gets called if player hits a target
function clickedTarget2() {
    // Right now, just updates a count.
    // Could use some player feedback here
    hits2 += 1;
};

// The main function that sets up targets and starts a game
function setUpTargetsAndPlay2(numberOfTargets, displayTimeMs) {
    clicks2 = 0;
    targets2 = numberOfTargets;
    hits2 = 0;

    // Setup click detection for the entire table
    $("table").on("click", function () {

        clicks2 += 1;
        // alert("clicked. Max = " + clicks);
        if (hits2 === targets2) {
            alert("No more clicks! You got " + hits2 + " out of " + targets2);
            // Turn off click detection
            $("td").off("click");
            $("table").off("click");
            $(".targetImg").remove();
        }
    });

    console.log("Selecting " + targets2 + " targets");
    // Get the number of targets specified and randomly picks cells to display them in for the target table
    for (var x = 0; x < targets2; x++) {
        var targetNum2 = getRandomInt2(1, 50); // Pick a random table cell
        console.log("Table cell selected for target = " + targetNum2);
        var tdID2 = "td" + targetNum2;
        var imgID2 = "img" + targetNum2;

<<<<<<< HEAD
        $('#' + tdID).on("click", clickedTarget).append("<img id = " + imgID + " class= 'targetImg' src='zombiebaby7.png'>");
=======
        $('#' + tdID2).on("click", clickedTarget2).append("<img id = " + imgID2 + " class= 'targetImg' src='lotusflower.png'>");
>>>>>>> origin/master
        $('#' + imgID2).delay(displayTimeMs).hide(0);
    }

};
