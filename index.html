const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const rapidApiKey = '64de0ed6b3msh9229ac50362fe02p1f6274jsna4f3c65cd08d'; // Replace with your RapidAPI key
const rapidApiHost = 'grocery-pricing-api.p.rapidapi.com'; // Replace with your RapidAPI host

app.get('/', (req, res) => {
    res.send('Welcome to the Grocery Pricing API!');
});

app.get('/searchGrocery', async (req, res) => {
    const keyword = req.query.keyword;
    if (!keyword) {
        return res.status(400).json({ error: 'Keyword parameter is required' });
    }

    try {
        const response = await axios.get(`https://${rapidApiHost}/searchGrocery`, {
            params: {
                keyword,
                perPage: '10',
                page: '1'
            },
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': rapidApiHost
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch grocery data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
