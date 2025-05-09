// Quiz logic
document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let score = 0;
    if (document.querySelector('input[name="q1"]:checked')?.value === "Cairo") score++;
    if (document.querySelector('input[name="q2"]:checked")?.value === "Saudi Arabia") score++;
    if (document.querySelector('input[name="q3"]:checked")?.value === "Rabat") score++;
    if (document.querySelector('input[name="q4"]:checked")?.value === "Egypt") score++;
    if (document.querySelector('input[name="q5"]:checked")?.value === "Jordan") score++;

    document.getElementById('score').innerText = `Your score is: ${score}/5`;
});

// Search function for countries
const countries = [
    { name: 'Egypt', capital: 'Cairo', flag: 'egypt.png' },
    { name: 'Saudi Arabia', capital: 'Riyadh', flag: 'saudi-arabia.png' },
    { name: 'Jordan', capital: 'Amman', flag: 'jordan.png' },
    // Add all 22 countries here
];

function searchCountries() {
    let searchQuery = document.getElementById('searchBar').value.toLowerCase();
    let filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchQuery)
    );
    displayCountries(filteredCountries);
}

function displayCountries(countryList) {
    let countryListContainer = document.getElementById('countryList');
    countryListContainer.innerHTML = '';
    countryList.forEach(country => {
        let countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <img src="flags/${country.flag}" alt="${country.name} Flag">
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
        `;
        countryListContainer.appendChild(countryDiv);
    });
}

// Display all countries initially
displayCountries(countries);
