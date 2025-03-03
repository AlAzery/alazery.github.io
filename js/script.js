AOS.init();

main = document.querySelector('main');

setTimeout(() => {
    main.style.display = 'block';
}, 3000);

(function() {
    emailjs.init({
      publicKey: "tLYOhqL0dWvzPwjK-",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_87aynuj', 'template_of9lnv2', this)
            .then(() => {


                console.log('SUCCESS!');
                document.querySelector('.alert').style.display = 'block';
                document.getElementById('contact-form').reset(); // Reset the form on success
                setTimeout(() => {
                    document.querySelector('.alert').style.display = 'none';
                }, 8000);

            }, (error) => {
                console.log('FAILED...', error);
                // document.querySelector('.failed').style.display = 'block';
            });
    });
}