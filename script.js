const messageParts = {
  partOne: ["Luffy", "Zoro", "Sanji", "Kaido", "Rayleigh"],
  partTwo: [
    "can be",
    "will be",
    "will not be",
    "has been",
    "is destined to be",
  ],
  partThree: [
    "the Pirate King!",
    "the Pirate Queen!",
    "the Strongest in the world!",
    "the Greatest Swordsman!",
    "the most liked character in the story!",
  ],
};

const messagePart = (part) => {
  return Math.floor(Math.random() * part.length);
};

const mixedMessage = () => {
  console.log(
    `${messageParts.partOne[messagePart(messageParts.partOne)]} ${
      messageParts.partTwo[messagePart(messageParts.partTwo)]
    } ${messageParts.partThree[messagePart(messageParts.partThree)]}`
  );
};

mixedMessage();
