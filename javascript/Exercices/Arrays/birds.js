const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

const index = birds.indexOf("Eagles");
const removedBird = birds.splice(index, 1);

function startsWithE(bird) {
  return bird.startsWith("E");
}
const eBirds = birds.filter(startsWithE);

console.log(eBirds);