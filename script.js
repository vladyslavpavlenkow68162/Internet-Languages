const currentPrices = {}; // map
const favorites = new Set(); // set
let showingFavorites = false; 

async function fetchCryptocurrencies() {
    try {
        const response = await fetch('https://api.coincap.io/v2/assets'); 
        if (!response.ok) {
            throw new Error('Network response was not ok'); 
        }
        const data = await response.json(); 
        displayData(data.data); 
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error); 
    }
}

function displayData(cryptocurrencies) {
    console.log(cryptocurrencies); 
    const coinsTableElement = document.querySelector("#crypto-table tbody");
    let html = "";
    cryptocurrencies.forEach(coin => {
        html += `
        <tr>
            <td>${coin.rank}</td>
            <td>${coin.name}</td>
            <td>${coin.symbol}</td>
            <td>${coin.priceUsd}</td>
        </tr>`;
    });
    coinsTableElement.innerHTML = html;
}

fetchCryptocurrencies();