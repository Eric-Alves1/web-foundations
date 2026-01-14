// Adapted from an MDN challenge; added language toggle and dynamic story generation in Portuguese and English

//NOTE: i know that this is not the best way to do it but im still learning and the things that i've did in this code is more than i knew before doing this challenge, so during the challenge i've learned new concepts.

document.getElementById('br').onchange = () => {
  document.getElementById('name').textContent = "Insira um nome personalizado:";
  document.getElementById('custom-name').placeholder = "Ex: seu nome";
  document.getElementById('countryChoosed').textContent = "Escolha um país:";
  document.getElementById('country1').textContent = "Brasil";
  document.getElementById('country2').textContent = "Estados unidos";
  document.getElementById('button').textContent = "Gerar historia aleatoria";
};

document.getElementById('eua').onchange = () => {
  document.getElementById('name').textContent = "Enter custom name:";
  document.getElementById('custom-name').placeholder = "e.g.: your name";
  document.getElementById('countryChoosed').textContent = "Choose locale:";
  document.getElementById('country1').textContent = "Brazil";
  document.getElementById('country2').textContent = "United States";
  document.getElementById('button').textContent = "Generate random story";
};

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const charactersPT = ["Tonhão caipira", "Chiquinho biruta", "Zé buxudo"];
const placesPT = ["Casa do amostradinho", "Lagoa dos sigmas", "Praia dos alfas"];
const eventsPT = ["Começou a farmar aura", "O rei six-seven (67) apareceu", "o tralalero tralala sucumbiu aos céus"];

const charactersEN = ["Billy the Farmer", "Crazy Charlie", "Big Joe"];
const placesEN = ["Wacky Cottage", "Sigma Pond", "Alpha Beach"];
const eventsEN = ["Started farming aura", "King six-seven suddenly appeared", "the tralalero tralala got carried away by the clouds"];

function returnRandomStoryString(lan, characters, places, events) {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);
  
  let storyText = {
    pt: `Era 35 Graus celsius la fora, então ${randomCharacter} saiu para passear. quando ele chegou na ${randomPlace}, ele parou por alguns segundos, então ${randomEvent}. João viu tudo, mas não estava surpreso ${randomCharacter} pesa 95Kg, e era um dia quente`,
    en: `It was 35 Graus celsius outside, so ${randomCharacter} went for a walk. When he arrived at ${randomPlace}, he paused for a few seconds, then ${randomEvent}. John saw everything, but wasn't surprised ${randomCharacter} weighs 95Kg, and it was a hot day`
  };
  return storyText[lan];
}

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let lan, characters, places, events;
  
  if (document.getElementById('eua').checked) {
    lan = "en";
    characters = charactersEN;
    places = placesEN;
    events = eventsEN;
  } else {
    lan = "pt";
    characters = charactersPT;
    places = placesPT;
    events = eventsPT;
  }
  
  let newStory = returnRandomStoryString(lan, characters, places, events);
  
  if (customName.value !== "") {
    const name = customName.value;
    if (lan === "pt") {
     newStory = newStory.replace("João", name);
    } else {
      newStory = newStory.replace("John", name);
    }
  }

  if (lan === "en") {
    const temperature = Math.round((35 * 9/5 ) + 32) + " Fahrenheit";
    const weight = Math.round(95 * 2.20462) + "lbs";
    newStory = newStory.replace("35 Graus celsius", temperature);
    newStory = newStory.replace("95Kg", weight);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}