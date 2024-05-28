const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'grocery-price-comparison')));

// Endpoint to fetch grocery prices for a specific product
app.get('/api/prices/:product', async (req, res) => {
    const product = req.params.product;

    try {
        // Make a request to your grocery pricing API to fetch prices for the specified product
        const response = await axios.get('https://grocery-pricing-api.p.rapidapi.com/searchGrocery', {
            params: {
                product: product
            },
            headers: {
                'Authorization': 'Bearer 64de0ed6b3msh9229ac50362fe02p1f6274jsna4f3c65cd08d'
            }
        });

        // Extract the prices from the API response
        const prices = response.data.prices;

        // Send the prices back to the client
        res.json(prices);
    } catch (error) {
        console.error('Error fetching prices:', error);
        res.status(500).json({ error: 'Failed to fetch prices' });
    }
});

// Endpoint to compare prices from different stores
app.get('/api/compare', async (req, res) => {
    try {
        // Make a request to your grocery pricing API to compare prices from different stores
        const response = await axios.get('https://grocery-pricing-api.p.rapidapi.com/searchGrocery', {
            headers: {
                'Authorization': 'Bearer 64de0ed6b3msh9229ac50362fe02p1f6274jsna4f3c65cd08d'
            }
        });

        // Extract the comparison data from the API response
        const comparison = response.data.comparison;

        // Send the comparison data back to the client
        res.json(comparison);
    } catch (error) {
        console.error('Error comparing prices:', error);
        res.status(500).json({ error: 'Failed to compare prices' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
