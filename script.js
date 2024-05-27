document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-query').value;
    fetchPrices(query);
});

function fetchPrices(query) {
    // Mock data
    const prices = {
        "Store A": Math.random() * 10,
        "Store B": Math.random() * 10,
        "Store C": Math.random() * 10
    };

    let resultSection = document.createElement('section');
    resultSection.id = 'results';
    resultSection.innerHTML = '<h2>Prices for ' + query + '</h2>';

    let priceList = document.createElement('ul');
    let bestPrice = Infinity;
    let bestStore = '';

    for (let store in prices) {
        let price = prices[store].toFixed(2);
        let listItem = document.createElement('li');
        listItem.textContent = store + ': $' + price;
        priceList.appendChild(listItem);

        if (prices[store] < bestPrice) {
            bestPrice = prices[store];
            bestStore = store;
        }
    }

    resultSection.appendChild(priceList);
    let bestPriceDisplay = document.createElement('p');
    bestPriceDisplay.innerHTML = '<strong>Best Price: ' + bestStore + ' - $' + bestPrice.toFixed(2) + '</strong>';
    resultSection.appendChild(bestPriceDisplay);

    document.querySelector('main').appendChild(resultSection);
}
