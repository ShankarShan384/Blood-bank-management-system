function searchDonors() {
  const input = document.getElementById('searchInput').value.toUpperCase();
  const results = document.getElementById('results');
  results.innerHTML = '';

  const dummyDonors = [
    { name: 'John', blood: 'A+' },
    { name: 'Jane', blood: 'O+' },
    { name: 'Sam', blood: 'B+' },
  ];

  const matched = dummyDonors.filter(donor => donor.blood === input);

  if (matched.length === 0) {
    results.innerHTML = '<li>No matching donors found.</li>';
  } else {
    matched.forEach(donor => {
      results.innerHTML += `<li>${donor.name} - ${donor.blood}</li>`;
    });
  }
}
