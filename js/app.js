import * as weights from "./weights.js";
import * as volumes from "./volumes.js";

const getAmount = () => {
    return document.querySelector("input").value;
};

const getUnit = () => {
    return document.querySelector("select").value;
};

const standardiseWeight = (weight, unit) => {
    switch (unit) {
        case "pounds":
            return weights.pounds(weight);
        case "tonnes":
            return weights.tonnes(weight);
        case "stone":
            return weights.stone(weight);
    }
};

const button = document.querySelector(".calculate");
button.addEventListener("click", () => {
    // console.log(getAmount(), getUnit());
    console.log(standardiseWeight(getAmount(), getUnit()));
});

