import * as weights from "./weights.js";
import * as volumes from "./volumes.js";

const getAmount = () => {
    return document.querySelector("input").value;
};

const getUnit = () => {
    return document.querySelector("select").value;
};

const button = document.querySelector(".calculate");
button.addEventListener("click", () => {
   console.log(getAmount(), getUnit());
});

