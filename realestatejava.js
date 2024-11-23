
//Calculating Mortgage
  document.getElementById('mortgage-form').addEventListener('submit',function(event){
    event.preventDefault();
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value)/100/12;
    const loanTerm = parseInt(document.getElementById('loan-term').value)*12;
     
    const x = Math.pow(1+interestRate,loanTerm);
    const monthlyPayment = (loanAmount*x*interestRate)/(x-1);
    document.getElementById('result').innerText = monthlyPayment.toFixed(2);
});

 //Smooth Scroll for navigation
 document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
       behavior:'smooth'
    });
  });
});
//VIEWING REQUEST
  document.getElementById('viewing-form').addEventListener('submit',function(event){
   event.preventDefault();
   alert("Viewing request submitted!");
});

// contact Form
   document.getElementById('contact-form').addEventListener('submit',function(event){
    event.preventDefault();
    alert("Your message has been sent!");
   });

