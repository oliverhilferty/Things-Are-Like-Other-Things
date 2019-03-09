import * as weights from "./weights.js";
import * as volumes from "./volumes.js";
import * as distances from "./distances.js";

const getAmount = () => document.querySelector("input").value;
const getUnit = () => document.querySelector("select").value;
const getUnitType = () => document.querySelector(".same-as-selected").dataset.type;

// These functions could probably be collapsed into one later on
const standardiseWeight = (weight, unit) => weights[unit](weight);
const standardiseVolume = (volume, unit) => volumes[unit](volume);
const standardiseDistance = (volume, unit) => distances[unit](volume);

const convert = (measurement, unit, unitType) => {
    let standardisedMeasurement, units;
    switch (unitType) {
        case "weight":
            standardisedMeasurement = standardiseWeight(measurement, unit);
            units = weights.units;
            break;
        case "volume":
            standardisedMeasurement = standardiseVolume(measurement, unit);
            units = volumes.units;
            break;
        case "distance":
            standardisedMeasurement = standardiseDistance(measurement, unit);
            units = distances.units;
            break;
    }

    let randomUnit = units[Math.floor(Math.random() * units.length)];

    console.log(standardisedMeasurement);
    console.log(randomUnit);
    const message = `${measurement} ${unit} is approximately equal to ${(standardisedMeasurement / randomUnit.val).toFixed(2)} ${randomUnit.unit}`;
    return message;
};

const button = document.querySelector(".calculate");
button.addEventListener("click", () => {
    console.log(convert(getAmount(), getUnit(), getUnitType()));
});
