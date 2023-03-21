const log = console.log;
//ROOT
const root = document.getElementById('root')
// CHECKOUT BUTTON
const button = document.querySelector('.checkout-btn');

button.addEventListener('click', () => {
    fetch('http://localhost:8000/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: [
                { id: 1, quantity: 1 },
            ],
        }),
    }).then(res => {
        if (res.ok) return res.json();
        return res.json().then(json => Promise.reject(json));
    })
        .then(({ url }) => {
            window.location = url;
        })
        .catch(e => {
            console.error(e.error);
        })
});