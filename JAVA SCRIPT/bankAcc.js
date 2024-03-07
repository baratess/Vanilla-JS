const accInfo = document.querySelector(".account-info");

function accountInfo(name,accNum,balance)
{
  const myInfo = document.createElement('div');
  myInfo.innerHTML = `<p><strong>Account Holder:</strong> ${name} </p>
      <p><strong>Account Number:</strong> ${accNum} </p>
      <p><strong>Balance:</strong> ${balance} </p>`;
  accInfo.appendChild(myInfo);
}
// accountInfo("mahmut", 123123, 100);