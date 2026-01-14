const totalSeconds = 367;
const minutes = (totalSeconds - totalSeconds % 60) / 60;
const seconds = totalSeconds % 60;
console.log(`minutes: ${minutes}`);
console.log(`seconds: ${seconds}`);