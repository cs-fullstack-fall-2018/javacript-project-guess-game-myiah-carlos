var clicks3 = 0;
var targets3 = 15;
var hits3 = 0;
function letsRock() {


    var theGo = document.getElementById("goGetIt");
    theGo.onclick = function () {
        // Get random number of targets and do setup
        var targetKount = targets3;
        var targetTime = 13000;
        // No start the game!
        setUpTargetsAndPlay(targetKount, targetTime);
    };
}
// Utility function to get a random table cell number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// This function gets called if player hits a target
function clickedTarget() {
    // Right now, just updates a count.
    // Could use some player feedback here
    hits3 += 1;
};

// The main function that sets up targets and starts a game
function setUpTargetsAndPlay(numberOfTargets, displayTimeMs) {
    clicks3 = 0;
    targets3 = numberOfTargets;
    hits3 = 0;

    // Setup click detection for the entire table
    $("table").on("click", function () {

        clicks3 += 1;
        // alert("clicked. Max = " + clicks);
        if (clicks3 === targets3) {
            alert("No more clicks! You got " + hits3 + " out of " + targets3);
            // Turn off click detection
            $("td").off("click");
            $("table").off("click");
            $(".targetImg").remove();
        }
    });

    console.log("Selecting " + targets3 + " targets");
    // Get the number of targets specified and randomly picks cells to display them in for the target table
    for (var x = 0; x < targets3; x++) {
        var targetNum = getRandomInt(1, 50); // Pick a random table cell
        console.log("Table cell selected for target = " + targetNum);
        var tdID = "td" + targetNum;
        var imgID = "img" + targetNum;

        $('#' + tdID).on("click", clickedTarget).append("<img id = " + imgID + " class= 'targetImg' src='zombiebaby7.png'>");
        $('#' + imgID).delay(displayTimeMs).hide(0);
    }

};
