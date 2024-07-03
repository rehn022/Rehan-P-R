function sendEmail(){
    Email.send({
      secureToken:" d62fdaa8-d410-4f98-a480-23eb20de963f",
      To : 'rehanregip@gmail.com',
      From : document.getElementById("email").value,
      Subject : "New Contact form enquiry",
      Body : "And this is the body"

      
    }).then(
      message => alert(message)
    );

}
