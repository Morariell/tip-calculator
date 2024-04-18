// Tip Calculator

// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let bill = +document.getElementById("BillA-in").value;
  let tip = +document.getElementById("TipP-in").value;

  // Process
  let total1 = (bill * tip) / 100;
  let total2 = bill * 0.05;
  let total3 = total2 + total1 + bill;

  // Output
  document.getElementById("output").innerHTML = `Amount to Tip: $${total1}`;
  document.getElementById("output2").innerHTML = `GST: $${total2}`;
  document.getElementById("output3").innerHTML = `Total Bill Amount: ${total3}`;
}
