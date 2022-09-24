
/*
function clearhistory(){
  localStorage.clear();
}
 function list_Update(){

  

    const item = document.getElementById('item').value,
        amount = document.getElementById('amount').value,
      listNode_1 = document.getElementById('list_1'),
      listNode_2 = document.getElementById('list_2'),
      liNode1 = document.createElement("LI"),
      liNode_2 = document.createElement("LI"),
      itemNode = document.createTextNode(item),
      amountNode = document.createTextNode(amount);

      amount.forEach(amount => balance.add(amount));

    

      liNode_2.appendChild(itemNode);
      liNode1.appendChild(amountNode);
      listNode_1.appendChild(liNode1);
      listNode_2.appendChild(liNode_2);
  }
      */
 
  const localStorageTransactions = JSON.parse(
    localStorage.getItem("transactions")
  );
  let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

  let totalBalance = '$0.00~';

function update(){

const amount = document.getElementById('amount').value;
const item = document.getElementById('item').value;
const totalDisplay = document.getElementById('balanceDisplay');
totalDisplay.textContent = totalBalance;

const listNode = document.getElementById('list_1'),
liNode = document.createElement("LI"),
itemNode = document.createTextNode(item),
amountNode = document.createTextNode(amount);

liNode.appendChild(amountNode);
liNode.appendChild(itemNode);
listNode.appendChild(liNode);



}

function updateBalance(){
const amounts = transactions.map((transaction) => transaction.amount);

const total = amounts.reduce((bal, value) =>(bal += value),0).toFixed(2);
  
}
