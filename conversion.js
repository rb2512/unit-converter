function calculKm(milesToConvert) { 
    const resultMiles = milesToConvert * 1.60934;
    return resultMiles;
};
function calculKg(lsbToConvert) { 
    const resultLbs = lsbToConvert * 0.453592;
    return resultLbs;
};
function calculCelsius(fahrenheitToConvert) { 
    const resultFahrenheit = (fahrenheitToConvert - 32) * 5/9;
    return resultFahrenheit;
};
function calculMiles(kmToConvert) { 
    const resultKm = kmToConvert * 0.621371;
    return resultKm;
};
function calculLbs(kgToConvert) { 
    const resultKg = kgToConvert * 2.20462;
    return resultKg;
};
function calculFahrenheit(celsiusToConvert) { 
    const resultCelsius = (celsiusToConvert * 9/5) + 32;
    return resultCelsius;
}
export default function resultInput (valeur, unite) { 
    let calculCompteur;
    let resultUnit;
    if (unite === "miles") {
        calculCompteur = calculKm(valeur);
        resultUnit = "Km";
        return {calculCompteur, resultUnit};
    }
        if (unite === "lbs") {
        calculCompteur = calculKg(valeur);
        resultUnit = "Kg";
        return {calculCompteur, resultUnit};
    }
        if (unite === "fahrenheit") {
        calculCompteur = calculCelsius(valeur);
        resultUnit = "°C";
        return {calculCompteur, resultUnit};
    }
        if (unite === "km") {
        calculCompteur = calculMiles(valeur);
        resultUnit = "Miles";
        return {calculCompteur, resultUnit};
    }
        if (unite === "kg") {
        calculCompteur = calculLbs(valeur);
        resultUnit = "Lbs";
        return {calculCompteur, resultUnit};
    }
        if (unite === "celsius") {
        calculCompteur = calculFahrenheit(valeur);
        resultUnit = "Fahrenheit";
        return {calculCompteur, resultUnit};
    }
};