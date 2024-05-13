const form = document.getElementById('survey-form');

form.addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const color = document.querySelector('input[name="color"]:checked');
  const genre = document.getElementById('genre').value;
  const comments = document.getElementById('comments').value;

  // Basic validation to make sure required fields are filled
  if (name === '' || color === null || genre === '') {
    alert('Please fill in all required fields!');
    event.preventDefault(); // Prevent form submission if validation fails
  } else {
    // You can process the form data here (e.g., send it to a server)
    console.log('Survey submitted successfully!');
    console.log('Name:', name);
    console.log('Favorite Color:', color.value);
    console.log('Favorite Genre:', genre);
    console.log('Comments:', comments);
  }
});
