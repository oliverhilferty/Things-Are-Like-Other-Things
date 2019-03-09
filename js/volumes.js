// Volumes are given in Litres (L)

export const impOunces = volume => volume / 35.195;
export const impPints = volume => volume / 1.76;
export const millilitres = volume => volume / 1000;

export const units = [
    {
        unit: "Cans of Coca Cola",
        desc: "A standard 330ml can of Coca Cola",
        val: 0.33
    }
];