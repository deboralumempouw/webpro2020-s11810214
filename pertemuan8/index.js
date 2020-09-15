let account = {
    name: "Debora Eklecia Prisca Lumempouw",
    expenses: [],
    addExpenses: function(description, amount){
        this.expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary(){
      let total = 0;
      this.expenses.forEach((item)=>{
        total+=item.amount;
      })
      return total;
    }
};

account.addExpenses('Beli Buah_Pepaya', 30000);
account.addExpenses('Beli Roti',20000);
console.log("Total pengeluaran " + account.name + ' adalah Rp.' + account.getAccountSummary());