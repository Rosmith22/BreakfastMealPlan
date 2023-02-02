// var paymentForm = document.getElementById('paymentForm');
// paymentForm.addEventListener('submit', payWithPaystack, false);
// function payWithPaystack() {
//   var handler = PaystackPop.setup({
//     key: 'pk_test_08cd3f648abb0483989f8a98949cc9dbdeddc6cc', // Replace with your public key
//     email: document.getElementById('email').value,
//     amount: document.getElementById('amount').value * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
//     // currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
//     callback: function(response) {
//       //this happens after the payment is completed successfully
//       var reference = response.reference;
//       alert('Payment complete! Reference: ' + reference);
//       // Make an AJAX call to your server with the reference to verify the transaction
//     },
//     onClose: function() {
//       alert('Transaction was not completed, window closed.');
//     },
//   });
//   handler.openIframe();
// }

// const paymentForm = document.getElementById('paymentForm');
// paymentForm.addEventListener("submit", payWithPaystack, false);
// function payWithPaystack(e) {
//   e.preventDefault();

//   let handler = PaystackPop.setup({
//     key: 'pk_test_08cd3f648abb0483989f8a98949cc9dbdeddc6cc', // Replace with your public key
//     email: document.getElementById("email").value,
//     amount: document.getElementById("amount").value * 100,
//     ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you

//     onClose: function(){
//       alert('Window closed.');
//     },
//     callback: function(response){
//       let message = 'Payment complete! Reference: ' + response.reference;
//       alert(message);
//     }
//   });

//   handler.openIframe();
// }

// / Define the API endpoint
// const url = "https://api.paystack.co/transaction/initialize";

// Define the API key
// const API_KEY = "YOUR_API_KEY";

// // Get the pay button
// // const payButton = document.getElementById("payButton");
// // async function submitForm() {
//     let email = document.getElementById("email").value;
//     let amount = document.getElementById("amount").value * 100;
//     const transactionData = {
//       amount: amount,
//       email: email,
//       // callback_url: "https://google.com",
//     };
//     console.log(transactionData);
//     //   Initialize the transaction
// // Add a click event to the pay button
// payButton.addEventListener("click", async () => {
//   // Define the transaction data
//   const transactionData = {
//     amount: amount,
//     email: email,
//     // callback_url: "https://google.com",
//   };
//   console.log(transactionData);
//   // Initialize the transaction
//   //   try {
//   //     const pay = await fetch(url, {
//   //       method: "POST",
//   //       headers: {
//   //         Authorization: `Bearer sk_test_e838d0b9d00ebbe422eeabed26e3a7a8a8329bd2`,
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(transactionData),
//   //     });

//   //     const data = await pay.json();
//   //     window.location.href = data.data.authorization_url;
//   //   } catch (error) {
//   //     throw error;
//   //   }
// });

const url = "https://api.paystack.co/transaction/initialize";
async function submitForm() {
  let email = document.getElementById("email").value;
  let amount = document.getElementById("amount").value * 100;
  const transactionData = {
    amount: amount,
    email: email,
    // callback_url: "https://google.com",
  };
  console.log(transactionData);
  //   Initialize the transaction
  try {
    const pay = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer sk_test_95ce4ec11048054a3cb1dd6ef0692841a7d264ec`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    });

    const data = await pay.json();
    var reference = data.data.reference;
    window.location.href = data.data.authorization_url;
  } catch (error) {
    throw error;
  }
}

const planUrl = "https://api.paystack.co/plan";
async function createForm() {
  var name = document.getElementById("name").value;
  var amount = document.getElementById("price").value * 100;
  var description = document.getElementById("description").value;
  var interval = "";
  if (document.getElementById("daily").checked) {
    interval = document.getElementById("daily").value;
  }
  if (document.getElementById("weekly").checked) {
    interval = document.getElementById("weekly").value;
  }
  if (document.getElementById("monthly").checked) {
    interval = document.getElementById("monthly").value;
  }
  const planData = {
    name,
    amount,
    interval,
    description,
    // callback_url: "https://google.com",
  };
  console.log(planData);
  //   Initialize the transaction
  try {
    const create = await fetch(planUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer sk_test_95ce4ec11048054a3cb1dd6ef0692841a7d264ec`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(planData),
    });

    const data = await create.json();
    console.log(data);
    alert("Breakfast Plan succesfully created! Proceed to make payment.");
    window.location.href = "/payment.html";
  } catch (error) {
    throw error;
  }
}
