export let conversionHistory= JSON.parse(localStorage.getItem("history")) || []; 
export function sauvegarderStorage(oldInputToSave, oldUnitToSave, newInputToSave, newUnitToSave) { 
    conversionHistory.push({"oldInput": oldInputToSave,"oldUnit": oldUnitToSave, "newInput": newInputToSave, "newUnit": newUnitToSave});
    localStorage.setItem("history", JSON.stringify(conversionHistory));
};
export function supprimerStorage(oldInputToDelete, oldUnitToDelete, newInputToDelete, newUnitToDelete) { 
    const index = conversionHistory.findIndex(ch => ch.oldInput === oldInputToDelete && ch.oldUnit === oldUnitToDelete && ch.newInput === newInputToDelete && ch.newUnit === newUnitToDelete);
    if (index !== -1) {
        conversionHistory.splice(index, 1);
        localStorage.setItem("history", JSON.stringify(conversionHistory));
    } return conversionHistory;
};
export function supprimerHistorique () {
    conversionHistory = [];
    localStorage.setItem("history", JSON.stringify(conversionHistory));
};
