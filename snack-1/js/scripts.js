/* 
 *  SNACK 1 - fattiMandareDallaMamma()
 *  Sulla base dei valori selezionati in una lista di checkbox, 
 *  stampare (in console) la lista della spesa, pronta da utilizzare!
*/

const printButton = document.getElementById('print-button');

printButton.addEventListener('click', function () {
    const groceryList = document.querySelectorAll('input[type="checkbox"]');
    const toBeBought = [];
    for (let i = 0; i < groceryList.length; i++) {
        const element = groceryList[i];
        if(element.checked){
            toBeBought.push({
                name: element.value,
                bought: '▢'
            });
        }
        console.log(element.value, element.checked);
    }
    console.table(toBeBought);
});