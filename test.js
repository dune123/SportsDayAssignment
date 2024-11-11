// Initialize scores
const scores = { Red: 0, Blue: 0, Green: 0, Yellow: 0 };

// Function to start sports day
function OpeningCeremony(Race100M) {
    console.log("Welcome to the Sports Day!");
    console.log("Scores at the start:", scores);

    setTimeout(() => {
        console.log("Let the games begin!");
        Race100M(LongJump); // Pass the next event as a Race100M
    }, 3000);
}

// Function to simulate the 100m race
function Race100M(LongJump) {
    console.log("Starting the 100m Race...");
    const times = {
        Red: Math.random() * 10,
        Blue: Math.random() * 10,
        Green: Math.random() * 10,
        Yellow: Math.random() * 10
    };
    const sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);

    // Award points
    scores[sortedTimes[0][0]] += 50; // 1st place
    scores[sortedTimes[1][0]] += 25; // 2nd place

    console.log("100m Race Results:", times);
    console.log("Updated Scores:", scores);

    setTimeout(() => LongJump(HighJump), 3000); // Pass LongJump as next event
}

// Function to simulate the Long Jump event
function LongJump(HighJump) {
    console.log("Starting the Long Jump...");
    const colors = ["Red", "Blue", "Green", "Yellow"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    scores[randomColor] += 150; // Award points to the randomly chosen color
    console.log(`${randomColor} wins the Long Jump!`);
    console.log("Updated Scores:", scores);

    setTimeout(() => HighJump(AwardCeremony), 3000); // Pass HighJump as next event
}

// Function to simulate the High Jump event with user input
function HighJump(AwardCeremony) {
    console.log("Starting the High Jump...");
    const color = prompt("Enter the color with the highest jump (Red, Blue, Green, Yellow):");

    if (color && scores[color] !== undefined) {
        scores[color] += 100; // Award points based on user input
        console.log(`${color} won the High Jump!`);
    } else {
        console.log("No color selected or invalid input for High Jump.");
    }

    console.log("Updated Scores:", scores);
    setTimeout(() => {AwardCeremony()}, 3000); // Pass AwardCeremony as next event
}

// Function to display the final scores and winners
function AwardCeremony() {
    console.log("The Award Ceremony begins...");
    console.log("Final Scores:", scores);

    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    console.log("Winners:");
    console.log(`1st Place: ${sortedScores[0][0]} with ${sortedScores[0][1]} points`);
    console.log(`2nd Place: ${sortedScores[1][0]} with ${sortedScores[1][1]} points`);
    console.log(`3rd Place: ${sortedScores[2][0]} with ${sortedScores[2][1]} points`);
}

// Start the sports day
OpeningCeremony(Race100M);
