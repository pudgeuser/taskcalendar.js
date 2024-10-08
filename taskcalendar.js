// Function to get the task for a given day
function getTaskForDay(day) {
    switch (day) {
        case "Monday":
            console.log("Task for Monday: Bonding wth my gf.");
            break;
        case "Tuesday":
            console.log("Task for Tuesday: work in shop.");
            break;
        case "Wednesday":
            console.log("Task for Wednesday: To go Grocery Store.");
            break;
        case "Thursday":
            console.log("Task for Thursday: Playing  Basketball.");
            break;
        case "Friday":
            console.log("Task for Friday: To go GYM.");
            break;
        case "Saturday":
            console.log("Task for Saturday: Doing HouseHold Choires.");
            break;
        case "Sunday":
            console.log("Task for Sunday: Planning to go church.");
            break;
        default:
            console.log("Unexpected input. Please enter a valid day of the week (e.g., Monday, Tuesday).");
    }
}

// Prompt the user to enter a day of the week
const userInput = prompt("Enter a day of the week:");

// Call the function with the user's input
getTaskForDay(userInput);