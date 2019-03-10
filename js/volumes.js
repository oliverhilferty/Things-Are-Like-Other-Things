// Volumes are given in Litres (L)
export const baseUnit = "litres (L)";

export const impOunces = volume => volume / 35.195;
export const impPints = volume => volume / 1.76;
export const millilitres = volume => volume / 1000;
export const impGallons = volume => volume *  4.546;

export const units = [
    {
        unit: "cans of Coca Cola",
        desc: "A standard 330ml can of Coca Cola",
        val: 0.33
    },
    {
        unit: "Olympic swimming pools",
        desc: "A standard Olympic swimming pool",
        val: 2500000
    },
    {
        unit: "human bodies worth of blood",
        desc: "The average volume of blood in a human body",
        val: 5
    },
    {
        unit: "cans of Guinness",
        desc: "A standard 440ml can of Guinness",
        val: 0.44
    }
];