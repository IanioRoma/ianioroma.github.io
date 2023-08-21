try {
  var typingEffect = new Typed(".logo", {
    strings: ["&#10094;ChooseWeb&#10095;"],
    loop: false,
    typeSpeed: 80,
  });
} catch (error) {
  console.error("An error occurred while initializing the typing effect:", error);
}

try {
var typingEffect = new Typed(".portfolio",{
  strings : ["Portfolio"],
  loop : false,
  typeSpeed : 80,
  backSpeed : 50,
  backDelay : 1500
});
} catch (error) {
  console.error("An error occurred while initializing the typing effect:", error);
}
/* var typingEffect = new Typed(".multiText",{
  strings : ["Website", "SEO optimisation", "Social Media Marketing"],
  loop : true,
  typeSpeed : 80,
  backSpeed : 50,
  backDelay : 1500
}) */
