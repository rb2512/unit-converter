import { conversionHistory, supprimerStorage } from "./storage.js";

export const inputConvert = document.getElementById("inputConvert"); 
export const inputUnit = document.getElementById("inputUnit"); 
export const convertBtn = document.getElementById("convertBtn"); 
export const clearBtn = document.getElementById("clearBtn");
export const resultList = document.getElementById("resultList"); 
export const historyList = document.getElementById("historyList"); 

export function creerElement(historique) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = `${historique.oldInput} ${historique.oldUnit} → ${historique.newInput} ${historique.newUnit}`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.style.cursor = "pointer";
    div.appendChild(p);
    div.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", (event) => {
        const removeBtn = event.target;
        const removeDiv = removeBtn.parentElement;
        removeDiv.remove();
        supprimerStorage(historique.oldInput, historique.oldUnit, historique.newInput, historique.newUnit);
    });
    return div;
};
export function recupererInput (inputElement, unitElement) {
    const valueConvert = inputElement.value;
    const valueUnit = unitElement.value;
    return {valueConvert, valueUnit};
};
export function verifInputVide (input) { 
    const inputValue = input.trim();
    if (inputValue === "") {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Veuillez remplir le champ";
        errorMessage.style.color = "red";
        resultList.appendChild(errorMessage);
        return true;
    }
    else {
       return false;
    }
};
export function afficherReponse (reponseValeur, oldUnit, newUnit) { 
    const reponseElement = document.createElement("p");
    if (oldUnit === "miles") {
        reponseElement.textContent = `Le résultat est ${reponseValeur}${newUnit}.`
        return reponseElement;
    }
        if (oldUnit === "lbs") {
        reponseElement.textContent = `Le résultat est ${reponseValeur}${newUnit}.`
        return reponseElement;
    }
        if (oldUnit === "fahrenheit") {
        reponseElement.textContent = `Le résultat est ${reponseValeur}${newUnit}.`
        return reponseElement;
    }
        if (oldUnit === "km") {
        reponseElement.textContent = `Le résultat est ${reponseValeur}${newUnit}.`
        return reponseElement;
    }
        if (oldUnit === "kg") {
        reponseElement.textContent = `Le résultat est ${reponseValeur}${newUnit}.`
        return reponseElement;
    }
        if (oldUnit === "celsius") {
        reponseElement.textContent = `Le résultat est ${reponseValeur}${newUnit}.`
        return reponseElement;
    }
};
export function afficherHistorique () { 
    historyList.innerHTML = "";
    conversionHistory.forEach(convertHistory => {
        const historyElement = creerElement(convertHistory);
        historyList.appendChild(historyElement);
    });
};