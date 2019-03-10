// Distances are given in metres (m)
export const baseUnit = "metres (m)";

export const metres = distance => distance;
export const centimetre = distance => distance / 100;
export const millimetres = distance => distance / 1000;
export const kilometres = distance => distance * 1000;
export const inches = distance => distance / 39.37;
export const miles = distance => distance * 1609.344;

export const units = [
    {
        unit: "blue whales",
        desc: "An average female blue whale",
        val: 25
    },
    {
        unit: "Golden Gate Bridges",
        desc: "The Golden Gate Bridge",
        val: 2737
    },
    {
        unit: "men's size 10 shoes",
        desc: "A men's UK size 10 shoe",
        val: 0.28
    },
    {
        unit: "basketball free throws",
        desc: "A free throw in NBA basketball",
        val: 4.57
    }
];