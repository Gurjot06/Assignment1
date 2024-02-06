// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById("choosenNoun1");
const chosenVerb = document.getElementById("choosenVerb");
const chosenAdjective = document.getElementById("choosenAdjective");
const chosenNoun2 = document.getElementById("choosenNoun2");
const chosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyDisplay = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The Dog", "My Brother", "The Cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "kissed"];
const adjectives = ["a funny", "a scary", "a slimy", "a barking", "a hungry"];
const nouns2 = ["goat", "worm", "tree", "frog", "cow"];
const settings = ["in the forest", "on a hill", "under the stars", "by the ocean", "in the park"];

// Variables for count to grab array elements
let noun1Index = 0;
let verbIndex = 0;
let adjectiveIndex = 0;
let noun2Index = 0;
let settingIndex = 0;

/* Functions */
// Event handler for clicking the noun1 button
function noun1_on_click() {
    chosenNoun1.textContent = nouns1[noun1Index];
    incrementIndex('noun1');
}

// Event handler for clicking the verb button
function verb_on_click() {
    chosenVerb.textContent = verbs[verbIndex];
    incrementIndex('verb');
}

// Event handler for clicking the adjective button
function adjective_on_click() {
    chosenAdjective.textContent = adjectives[adjectiveIndex];
    incrementIndex('adjective');
}

// Event handler for clicking the noun2 button
function noun2_on_click() {
    chosenNoun2.textContent = nouns2[noun2Index];
    incrementIndex('noun2');
}

// Event handler for clicking the setting button
function setting_on_click() {
    chosenSetting.textContent = settings[settingIndex];
    incrementIndex('setting');
}

// concatenate the user story and display
function playback_on_click() {
    const story = `${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} ${chosenSetting.textContent}`;
    storyDisplay.textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    chosenNoun1.textContent = getRandomElement(nouns1);
    chosenVerb.textContent = getRandomElement(verbs);
    chosenAdjective.textContent = getRandomElement(adjectives);
    chosenNoun2.textContent = getRandomElement(nouns2);
    chosenSetting.textContent = getRandomElement(settings);
}

// Helper function to get a random element from an array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Helper function to increment array index and handle looping
function incrementIndex(type) {
    switch (type) {
        case 'noun1':
            noun1Index = (noun1Index + 1) % nouns1.length;
            break;
        case 'verb':
            verbIndex = (verbIndex + 1) % verbs.length;
            break;
        case 'adjective':
            adjectiveIndex = (adjectiveIndex + 1) % adjectives.length;
            break;
        case 'noun2':
            noun2Index = (noun2Index + 1) % nouns2.length;
            break;
        case 'setting':
            settingIndex = (settingIndex + 1) % settings.length;
            break;
    }
}

/* Event Listeners */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);


/* Here I have put a Reset button also as per the assignment just as an extra */
// Constants for reset button
const resetButton = document.getElementById("reset");

// Reset all chosen words to empty strings
function resetStory() {
    chosenNoun1.textContent = "";
    chosenVerb.textContent = "";
    chosenAdjective.textContent = "";
    chosenNoun2.textContent = "";
    chosenSetting.textContent = "";
    storyDisplay.textContent = "";
}

// Event handler for clicking the reset button
resetButton.addEventListener("click", resetStory);
