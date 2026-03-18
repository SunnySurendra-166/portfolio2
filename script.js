// Typing Effect
const text = "AI Engineer | Software Developer | LLM Enthusiast";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}
typing();


// ✅ EMAILJS INIT
(function(){
  emailjs.init("utZvxiUQrYac2bntC");
})();


// ✅ FORM SUBMIT (SAFE CHECK ADDED)
const form = document.getElementById("contact-form");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    console.log("Form Submitted");

    emailjs.sendForm(
      "service_sh0ues7",
      "template_ep9mpjn",
      this
    )
    .then(function(response) {
      console.log("SUCCESS!", response);
      document.getElementById("status").innerHTML = "✅ Message Sent!";
      form.reset();
    }, function(error) {
      console.log("FAILED...", error);
      document.getElementById("status").innerHTML = "❌ Error sending!";
    });

  });
}