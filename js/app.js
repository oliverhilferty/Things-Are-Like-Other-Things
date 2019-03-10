import * as weights from "./weights.js";
import * as volumes from "./volumes.js";
import * as distances from "./distances.js";
import * as prices from "./prices.js";

const getAmount = () => document.querySelector("input").value;
const getUnit = () => document.querySelector("select").value;
const getUnitType = () => document.querySelector(".same-as-selected").dataset.type;

// These functions could probably be collapsed into one later on
const standardiseWeight = (weight, unit) => weights[unit](weight);
const standardiseVolume = (volume, unit) => volumes[unit](volume);
const standardiseDistance = (volume, unit) => distances[unit](volume);
const standardisePrice = (price, unit) => prices[unit](price);

const convert = (measurement, unit, unitType) => {
    let standardisedMeasurement, units;
    let baseUnit;
    switch (unitType) {
        case "weight":
            standardisedMeasurement = standardiseWeight(measurement, unit);
            units = weights.units;
            baseUnit = weights.baseUnit;
            break;
        case "volume":
            standardisedMeasurement = standardiseVolume(measurement, unit);
            units = volumes.units;
            baseUnit = volumes.baseUnit;
            break;
        case "distance":
            standardisedMeasurement = standardiseDistance(measurement, unit);
            units = distances.units;
            baseUnit = distances.baseUnit;
            break;
        case "money":
            standardisedMeasurement = standardisePrice(measurement, unit);
            units = prices.units;
            baseUnit = prices.baseUnit;
            break;
    }

    let randomUnit = units[Math.floor(Math.random() * units.length)];

    console.log(standardisedMeasurement);
    console.log(randomUnit);
    return {
        convertedMessage: `${measurement} ${unit} is approximately equal to ${(standardisedMeasurement / randomUnit.val).toFixed(2)} ${randomUnit.unit}`,
        descriptionMessage: `${randomUnit.desc} is ${randomUnit.val} ${baseUnit}`
    }

};

const button = document.querySelector(".calculate");
button.addEventListener("click", () => {
    const converterMessageElement = document.querySelector(".converter-message");
    let converter = convert(getAmount(), getUnit(), getUnitType());
    console.log(converter.convertedMessage);
    converterMessageElement.innerHTML = converter.convertedMessage;
    converterMessageElement.classList.remove("faded");
    document.querySelector(".desc-message").innerHTML = converter.descriptionMessage;
});
