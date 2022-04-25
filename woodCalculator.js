function woodCalculator(chairQuantity, bedQuantity, tableQuantity) {
    const perChairWood = 3;
    const perTableWood = 20;
    const perBedWood = 50;
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
const fistOption = woodCalculator(1, 3, 2);
console.log(fistOption);