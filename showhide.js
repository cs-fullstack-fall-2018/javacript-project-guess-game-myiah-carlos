var clicks = 0;
var targets = 5;
var hits = 0;
function letsRock() {

    if(hits !== targets) {
        document.getElementById("level2").disabled = true;
    }

    var theGo = document.getElementById("goGetIt");
    theGo.onclick = function () {
        // Get random number of targets and do setup
        var targetKount = targets;
        var targetTime = 5000;
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
    hits += 1;
};

// The main function that sets up targets and starts a game
function setUpTargetsAndPlay(numberOfTargets, displayTimeMs) {
    clicks = 0;
    targets = numberOfTargets;
    hits = 0;

    // Setup click detection for the entire table
    $("table").on("click", function () {

        clicks += 1;
        // alert("clicked. Max = " + clicks);
        if (clicks === targets) {
            alert("No more clicks! You got " + hits + " out of " + targets);
            // Turn off click detection
            $("td").off("click");
            $("table").off("click");
            $(".targetImg").remove();
            document.getElementById("level2").disabled = false;
        }
    });

    console.log("Selecting " + targets + " targets");
    // Get the number of targets specified and randomly picks cells to display them in for the target table
    for (var x = 0; x < targets; x++) {
        var targetNum = getRandomInt(1, 50); // Pick a random table cell
        console.log("Table cell selected for target = " + targetNum);
        var tdID = "td" + targetNum;
        var imgID = "img" + targetNum;

        $('#' + tdID).on("click", clickedTarget).append("<img id = " + imgID + " class= 'targetImg' src='zombiebaby7.png'>");
        $('#' + imgID).delay(displayTimeMs).hide(0);
    }

};
