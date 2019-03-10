// Weights are given in Kilograms (KG)
export const baseUnit = "kilograms (KG)";

export const pounds = weight => weight / 2.205;
export const tonnes = weight => weight * 1000;
export const stone = weight => weight * 6.35;

export const units = [
    {
        unit: "brown bears",
        desc: "An average brown bear",
        val: 217
    },
    {
        unit: "Toyota Priuses (Prii??)",
        desc: "A Toyota Prius",
        val: 1530
    },
    {
        unit: "iPhone X's",
        desc: "An iPhone X",
        val: 0.174
    },
    {
        unit: "PS4 controllers",
        desc: "A PlayStation 4 Dualshock controller",
        val: 0.214
    },
    {
        unit: "Cats",
        desc: "An average adult domestic cat",
        val: 4
    }
];