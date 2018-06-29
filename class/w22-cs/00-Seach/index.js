const stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514];

const random_value = stuff[Math.floor(Math.random() * 14)]

let foundIt = false;

for (i = 0; i < stuff.length; i++) {
    if (random_value === stuff[i]) {
        console.log(`Found number at index: ${i}`);
        foundIt = true;
        break;
    }
}

if (!foundIt) {
    console.log("Couldn't find it.");
}