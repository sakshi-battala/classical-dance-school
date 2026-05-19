import { danceData } from "../data/dance-details-data.js";

const params = new URLSearchParams(window.location.search);

const dance = params.get("dance");

const selectedDance = danceData[dance];

if (selectedDance) {
  document.getElementById("danceTitle").textContent = selectedDance.title;

  document.getElementById("danceImage").src = selectedDance.image;

  document.getElementById("danceDescription").textContent =
    selectedDance.description;

  document.getElementById("danceHistory").textContent = selectedDance.history;

  document.getElementById("danceCoreTechniques").textContent =
    selectedDance.coreTechniques;
} else {
  console.log("Dance not found");
}
