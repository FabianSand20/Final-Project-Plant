// customize.js

import { PlantBuilder } from './Modules/plantBuilder.js';
import { capitalize } from './Modules/utils.js';

//************Logic Radio Buttons**************/

// Get references to the radio inputs using their IDs
const clayPotRadio = document.getElementById('clayPot');
const ceramicPotRadio = document.getElementById('ceramicPot');

clayPotRadio.addEventListener('change', handlePotChange);
ceramicPotRadio.addEventListener('change', handlePotChange);
function handlePotChange(event) {
  const selectedPot = event.target.value;

  const ImagePot = document.getElementById('pot');
  if (selectedPot == "clay") {
    ImagePot.src = "Assets/images/simple-clay-pot.png"
  } else if (selectedPot === "ceramic") {
    ImagePot.src = "Assets/images/simple-ceramic-pot.png";
  }
}

const potDecorationsToggle = document.getElementById('potDecorationsToggle');
potDecorationsToggle.addEventListener('change', handlePotDecorationsChange);

function handlePotDecorationsChange(event) {
  const ImagePot = document.getElementById('pot');
  
  if (event.target.checked) {
    if (ImagePot.src.includes("simple-ceramic-pot")) {
      ImagePot.src = "Assets/images/simple-ceramic-pot-decorated.png";
    } else if (ImagePot.src.includes("simple-clay-pot")) {
      ImagePot.src = "Assets/images/simple-clay-pot-decorated.png";
    }
  } else {
    if (ImagePot.src.includes("Assets/images/simple-clay-pot-decorated.png")) {
      ImagePot.src = "Assets/images/simple-ceramic-pot.png";
    } else if (ImagePot.src.includes("simple-clay-pot-decorated")) {
      ImagePot.src = "Assets/images/simple-clay-pot.png";
    }
  }
}


const potColorToggle = document.getElementById('potColorToggle');
potColorToggle.addEventListener('change', handlePotColorToggleChange);

function handlePotColorToggleChange(event) {
  const potColorOptions = document.getElementById('potColorOptions');
  const selectedColor = document.querySelector('input[name="potColor"]:checked');

  if (event.target.checked) {
    potColorOptions.style.display = 'block';
  } else {
    potColorOptions.style.display = 'none';
    if (selectedColor) {
      selectedColor.checked = false;
    }
  }
}

const potColorRadios = document.querySelectorAll('input[name="potColor"]');
potColorRadios.forEach(radio => {
  radio.addEventListener('change', handlePotColorChange);
});

function handlePotColorChange(event) {
  const selectedColor = event.target.value;
  const ImagePot = document.getElementById('pot');

  switch (selectedColor) {
    case 'blue':
      ImagePot.src = "Assets/images/painted-clay-pot-decorated.png";
      break;
    case 'pink':
      ImagePot.src = "Assets/images/painted-ceramic-pot-decorated.png";
      break;
    case 'green':
      ImagePot.src = "Assets/images/green-pot.png";
      break;
    case 'purple':
      ImagePot.src = "Assets/images/purple-pot.png";
      break;
    default:
      // Handle default behavior if needed
      break;
  }
}



const basicSoilRadio = document.getElementById('basicSoil');
const premiumSoilRadio = document.getElementById('premiumSoil');
const drainageSoilRadio = document.getElementById('drainageSoil');

basicSoilRadio.addEventListener('change', handleSoilChange);
premiumSoilRadio.addEventListener('change', handleSoilChange);
drainageSoilRadio.addEventListener('change', handleSoilChange);

function handleSoilChange(event) {
  const selectedSoil = event.target.value;
  const ImageSoil = document.getElementById('soil');

  if (selectedSoil === 'basicSoil') {
    ImageSoil.src = 'Assets/images/soil-composted.png';
  } else if (selectedSoil === 'premiumSoil') {
    ImageSoil.src = 'Assets/images/soil-fertilized.png';
  } else if (selectedSoil === 'drainageSoil') {
    ImageSoil.src = 'Assets/images/soil-drainage.png';
  }
}

const choosePlantSelect = document.getElementById('formPlant');
choosePlantSelect.addEventListener('change', handlePlantChange);

function handlePlantChange(event) {
  const selectedPlant = event.target.value;
  const ImagePlant = document.getElementById('choosePlant');
  
  console.log(ImagePlant)
  switch (selectedPlant) {
    case 'Aglaonema Silver Bay':
      ImagePlant.src = 'Assets/images/plant-aglaonema.png';
      break;
    case 'Aloe Vera':
      ImagePlant.src = 'Assets/images/plant-aloe.png';
      break;
    case 'Boston Fern':
      ImagePlant.src = 'Assets/images/plant-fern.png';
      break;
    case 'Cactus':
      ImagePlant.src = 'Assets/images/plant-cactus.png';
      break;
    case 'Monstera Deliciosa':
      ImagePlant.src = 'Assets/images/plant-monstera.png';
      break;
    case 'Peace Lily':
      ImagePlant.src = 'Assets/images/plant-peace-lily.png';
      break;
    case 'Sansevieria':
      ImagePlant.src = 'Assets/images/plant-sansevieria.png';
      break;
    default:
      ImagePlant.src = ''; 
      break;
  }
}

const mossPoleCheckbox = document.getElementById('mossPole');
const pebblesCheckbox = document.getElementById('pebbles');
const smallerPlantsCheckbox = document.getElementById('smallerPlants');

mossPoleCheckbox.addEventListener('change', handleExtrasChange);
pebblesCheckbox.addEventListener('change', handleExtrasChange);
smallerPlantsCheckbox.addEventListener('change', handleExtrasChange);

function handleExtrasChange() {
  const ImageExtras = document.getElementById('extrasContainer');
  ImageExtras.innerHTML = ''; // Limpiar el contenido actual

  if (mossPoleCheckbox.checked) {
    const mossPoleImg = document.createElement('img');
    mossPoleImg.src = 'Assets/images/moss-pole.png';
    mossPoleImg.alt = 'Moss Pole';
    ImageExtras.appendChild(mossPoleImg);
  }

  if (pebblesCheckbox.checked) {
    const pebblesImg = document.createElement('img');
    pebblesImg.src = 'Assets/images/pebbles.png';
    pebblesImg.alt = 'Pebbles';
    ImageExtras.appendChild(pebblesImg);
  }

  if (smallerPlantsCheckbox.checked) {
    const smallerPlantsImg = document.createElement('img');
    smallerPlantsImg.src = 'Assets/images/mini-plants.png';
    smallerPlantsImg.alt = 'Smaller Plants';
    ImageExtras.appendChild(smallerPlantsImg);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const customizeForm = document.getElementById('customizeForm');
  const customizePreview = document.getElementById('customizePreview');
  const customizePotImageContainer = document.getElementById('customizePotImageContainer');
  const customizePlantImageContainer = document.getElementById('customizePlantImageContainer');
  const customizeSoilImageContainer = document.getElementById('customizeSoilImageContainer');
  const customizeExtrasContainer = document.getElementById('customizeExtrasContainer');
  const customizeInfo = document.getElementById('customizeInfo');


  showCustomization();
  customizeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const choosePot = document.querySelector('input[name="choosePot"]:checked');
    const potDecorationsToggle = document.getElementById('potDecorationsToggle');
    const potColorToggle = document.getElementById('potColorToggle');
    const potColorOptions = document.getElementById('potColorOptions');
    const choosePlant = document.getElementById('choosePlant').value;
    const chooseSoil = document.querySelector('input[name="chooseSoil"]:checked');
    const chooseExtras = Array.from(document.querySelectorAll('input[name="chooseExtras"]:checked'));

    if (choosePot && choosePlant && chooseSoil) {
      const builder = new PlantBuilder();

      builder.withName(capitalize(choosePlant));

      if (chooseSoil.value === 'Basic composted soil') {
        builder.withSoil('Drainage Soil');
      } else if (chooseSoil.value === 'Premium fertilized soil') {
        builder.withSoil('Fertilized Soil');
      } else if (chooseSoil.value === 'Easy drainage soil') {
        builder.withSoil('Composted Soil');
      }

      if (choosePot.value === 'clay') {
        builder.withPotMaterial('Clay pot');
      } else if (choosePot.value === 'ceramic') {
        builder.withPotMaterial('Ceramic pot');
      }

      if (potDecorationsToggle.checked) {
        builder.withPotStyle('Decorated pot');
      } else {
        builder.withPotStyle('Simple pot');
      }

      if (potColorToggle.checked) {
        const potColor = document.querySelector('input[name="potColor"]:checked').value;
        builder.withColor(capitalize(potColor));
      }

      const chooseExtrasList = chooseExtras.map(extra => extra.value);
      builder.withExtras(chooseExtrasList);

      const customization = builder.build();

      showCustomization(customization);
    } else {
      alert('Por favor, responde todas las preguntas.');
    }
  });


  function showCustomization(recommendation, imagesHOJA) {

    /// Function to save information to the cache
    recommendation = JSON.parse(localStorage.getItem('Plant'));
    imagesHOJA = JSON.parse(localStorage.getItem('PlantImage'));


    // Clear previous recommendation
    customizePotImageContainer.innerHTML = '';
    customizePlantImageContainer.innerHTML = '';
    customizeSoilImageContainer.innerHTML = '';
    customizeExtrasContainer.innerHTML = '';
    customizeInfo.innerHTML = '';


    // Create and append pot image
    const potImage = document.createElement('img');
    potImage.src = `Assets/images/${imagesHOJA.water}`;
    potImage.id = "pot"
    customizePotImageContainer.appendChild(potImage);

    // Create and append plant image
    const plantImage = document.createElement('img');
    plantImage.src = `Assets/images/${imagesHOJA.plant}`;
    plantImage.id = "choosePlant"
    customizePlantImageContainer.appendChild(plantImage);

    // Create and append soil image
    const soilImage = document.createElement('img');
    soilImage.src = `Assets/images/${imagesHOJA.soil}`;
    soilImage.id = "soil"
    customizeSoilImageContainer.appendChild(soilImage);


  }
});
