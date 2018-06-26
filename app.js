const BudgetController = (() => {

})();

const UIController = (() => {

})();

const Controller = ((budgetCtrl, uiCtrl) => {

    document.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {

        }
    });

    console.log(budgetCtrl.publMethod())

})(BudgetController, UIController);

