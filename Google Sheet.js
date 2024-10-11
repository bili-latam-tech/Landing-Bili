const scriptURL = 'https://script.google.com/macros/s/AKfycbwURVAf8-WhRbKgh8z2F1m9eeq9KJwrInYSUkQ7v-vuAbhCFygfB15_euR0ny98ZkK8/exec'

const form = document.forms['email-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("gracias por ser parte de nuestra beta!"))
    .then(() => {window.location.reload();})
    .catch(error => console.error('Error!', error.message))
})