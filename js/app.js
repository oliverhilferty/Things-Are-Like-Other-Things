import * as weights from "./weights.js";
import * as volumes from "./volumes.js";

const getAmount = () => document.querySelector("input").value;
const getUnit = () => document.querySelector("select").value;

const standardiseWeight = (weight, unit) => weights[unit](weight);
const standardiseVolume = (volume, unit) => volumes[unit](volume);

const button = document.querySelector(".calculate");
button.addEventListener("click", () => {
    // console.log(getAmount(), getUnit());
    console.log(standardiseWeight(getAmount(), getUnit()));
});
