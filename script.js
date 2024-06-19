let curr1 = document.querySelectorAll(".curr1");
let curr2 = document.querySelector(".curr2");
let userinput = null;
let button = document.querySelector("button");
let result = document.querySelector("#result");
let message = document.querySelector(".alert");

button.onclick = () => {
   curr1 = document.querySelector(".curr1").value;
   curr2 = document.querySelector(".curr2").value;
   userinput = document.querySelector("#userinput").value;
   message.classList.remove("d-none");


   //FOR USD TO ANY CURRENCY
   if (curr1 === "USD" && curr2 === "INR") {
      result.innerText = userinput + " USD = " + USDINR * userinput + " INR";
   }
   else if (curr1 === "USD" && curr2 === "EUR") {
      result.innerText = userinput + " USD = " + USDEUR * userinput + " EUR";
   }
   else if (curr1 === "USD" && curr2 === "AUD") {
      result.innerText = userinput + " USD = " + USDAUD * userinput + " AUD";
   }
   else if (curr1 === "USD" && curr2 === "JPY") {
      result.innerText = userinput + " USD = " + USDJPY * userinput + " JPY";
   }
   else if (curr1 === "USD" && curr2 === "CAD") {
      result.innerText = userinput + " USD = " + USDCAD * userinput + " CAD";
   }
   else if (curr1 === "USD" && curr2 === "USD") {
      result.innerText = userinput + " USD = " + USDUSD * userinput + " USD";
   }

   //FOR EUR TO ANY CURRENCY
   if (curr1 === "EUR" && curr2 === "INR") {
      result.innerText = userinput + " EUR = " + EURINR * userinput + " INR";
   }
   else if (curr1 === "EUR" && curr2 === "EUR") {
      result.innerText = userinput + " EUR = " + EUREUR * userinput + " EUR";
   }
   else if (curr1 === "EUR" && curr2 === "AUD") {
      result.innerText = userinput + " EUR = " + EURAUD * userinput + " AUD";
   }
   else if (curr1 === "EUR" && curr2 === "JPY") {
      result.innerText = userinput + " EUR = " + EURJPY * userinput + " JPY";
   }
   else if (curr1 === "EUR" && curr2 === "CAD") {
      result.innerText = userinput + " EUR = " + EURCAD * userinput + " CAD";
   }
   else if (curr1 === "EUR" && curr2 === "USD") {
      result.innerText = userinput + " EUR = " + EURUSD * userinput + " USD";
   }

   //FOR AUD TO ANY CURRENCY
   if (curr1 === "AUD" && curr2 === "INR") {
      result.innerText = userinput + " AUD = " + AUDINR * userinput + " INR";
   }
   else if (curr1 === "AUD" && curr2 === "EUR") {
      result.innerText = userinput + " AUD = " + AUDEUR * userinput + " EUR";
   }
   else if (curr1 === "AUD" && curr2 === "AUD") {
      result.innerText = userinput + " AUD = " + AUDAUD * userinput + " AUD";
   }
   else if (curr1 === "AUD" && curr2 === "JPY") {
      result.innerText = userinput + " AUD = " + AUDJPY * userinput + " JPY";
   }
   else if (curr1 === "AUD" && curr2 === "CAD") {
      result.innerText = userinput + " AUD = " + AUDCAD * userinput + " CAD";
   }
   else if (curr1 === "AUD" && curr2 === "USD") {
      result.innerText = userinput + " AUD = " + AUDUSD * userinput + " USD";
   }

   //FOR CAD TO ANY CURRENCY
   if (curr1 === "CAD" && curr2 === "INR") {
      result.innerText = userinput + " CAD = " + CADINR * userinput + " INR";
   }
   else if (curr1 === "CAD" && curr2 === "EUR") {
      result.innerText = userinput + " CAD = " + CADEUR * userinput + " EUR";
   }
   else if (curr1 === "CAD" && curr2 === "AUD") {
      result.innerText = userinput + " CAD = " + CADAUD * userinput + " AUD";
   }
   else if (curr1 === "CAD" && curr2 === "JPY") {
      result.innerText = userinput + " CAD = " + CADJPY * userinput + " JPY";
   }
   else if (curr1 === "CAD" && curr2 === "CAD") {
      result.innerText = userinput + " USD = " + CADCAD * userinput + " CAD";
   }
   else if (curr1 === "CAD" && curr2 === "USD") {
      result.innerText = userinput + " CAD = " + CADUSD * userinput + " USD";
   }

   //FOR JPY TO ANY CURRENCY
   if (curr1 === "JPY" && curr2 === "INR") {
      result.innerText = userinput + " JPY = " + JPYINR * userinput + " INR";
   }
   else if (curr1 === "JPY" && curr2 === "EUR") {
      result.innerText = userinput + " JPY = " + JPYEUR * userinput + " EUR";
   }
   else if (curr1 === "JPY" && curr2 === "AUD") {
      result.innerText = userinput + " JPY = " + JPYAUD * userinput + " AUD";
   }
   else if (curr1 === "JPY" && curr2 === "JPY") {
      result.innerText = userinput + " JPY = " + JPYJPY * userinput + " JPY";
   }
   else if (curr1 === "JPY" && curr2 === "CAD") {
      result.innerText = userinput + " JPY = " + JPYCAD * userinput + " CAD";
   }
   else if (curr1 === "JPY" && curr2 === "USD") {
      result.innerText = userinput + " JPY = " + JPYUSD * userinput + " USD";
   }

   //FOR INR TO ANY CURRENCY
   if (curr1 === "INR" && curr2 === "INR") {
      result.innerText = userinput + " INR = " + INRINR * userinput + " INR";
   }
   else if (curr1 === "INR" && curr2 === "EUR") {
      result.innerText = userinput + " INR = " + INREUR * userinput + " EUR";
   }
   else if (curr1 === "INR" && curr2 === "AUD") {
      result.innerText = userinput + " INR = " + INRAUD * userinput + " AUD";
   }
   else if (curr1 === "INR" && curr2 === "JPY") {
      result.innerText = userinput + " INR = " + INRJPY * userinput + " JPY";
   }
   else if (curr1 === "INR" && curr2 === "CAD") {
      result.innerText = userinput + " INR = " + INRCAD * userinput + " CAD";
   }
   else if (curr1 === "INR" && curr2 === "USD") {
      result.innerText = userinput + " INR = " + INRUSD * userinput + " USD";
   }
}




