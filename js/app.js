import * as weights from "./weights.js";
import * as volumes from "./volumes.js";

const getAmount = () => document.querySelector("input").value;
const getUnit = () => document.querySelector("select").value;
const getUnitType = () => document.querySelector(".same-as-selected").dataset.type;

// These functions could probably be collapsed into one later on
const standardiseWeight = (weight, unit) => weights[unit](weight);
const standardiseVolume = (volume, unit) => volumes[unit](volume);

const convert = (measurement, unit, unitType) => {
    const unit = weights.units[Math.floor(Math.random() * weights.units.length)];
    return unit;
    // sillyUnits = measurement / sillyUnitMeasurement

};

const button = document.querySelector(".calculate");
button.addEventListener("click", () => {
    // console.log(getAmount(), getUnit());
    console.log(standardiseWeight(getAmount(), getUnit()));
    console.log(convert(getAmount(), getUnit(), getUnitType()));
});
