import resultInput from "./conversion.js";
import { sauvegarderStorage, conversionHistory, supprimerHistorique } from "./storage.js";
import { inputConvert, inputUnit, convertBtn, clearBtn, resultList, historyList, recupererInput,verifInputVide,afficherReponse, afficherHistorique } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => { 
    afficherHistorique();
});
convertBtn.addEventListener("click", () => { 
    resultList.innerHTML ="";
    const {valueConvert, valueUnit} = recupererInput(inputConvert, inputUnit);
    const inputVide = verifInputVide(valueConvert);
    if (!inputVide) {
        const {calculCompteur, resultUnit} = resultInput(valueConvert, valueUnit);
        resultList.appendChild(afficherReponse(calculCompteur, valueUnit, resultUnit));
        sauvegarderStorage(valueConvert, valueUnit, calculCompteur, resultUnit);
        afficherHistorique();
        inputConvert.value = "";
    }
});
clearBtn.addEventListener("click", () => { 
    const allDiv = historyList.querySelectorAll("div");
    allDiv.forEach(aloneDiv => {
        aloneDiv.remove();
    });
    supprimerHistorique();
});