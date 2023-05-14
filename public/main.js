const update = document.getElementById('update-button');

update.addEventListener('click', () => {
  fetch('/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Darth Vader',
      quote: 'I find your lack of faith disturbing.'
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log('Network response was not OK');
        throw new Error('Network response was not OK');
      }
    })
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
    });
});
