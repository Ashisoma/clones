// question threee

const { buildTransaction } = require('./utils/transactions.js')
function makeTransactions(accounts, transactions) {
  // TODO: implement this function
    accounts = JSON.stringify(accounts)
      transactions.forEach((tranaction) => {
      let t = accounts.find(a => a[0] == transaction.from);
      t[1] = t[1] - transaction.amount;
      
      //adding to  account
      let r = accounts.find(a => a[0] == transaction.to);
      r[1] = r[1] + transaction.amount;
  })
  
  
  return Promise.resolve(accounts);
}

module.exports = { makeTransactions };
