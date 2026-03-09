import express from 'express'
import axios from 'axios'


const app = express()

const port = 3000


// /api/v2/facts/random?language=en
const apiClient = axios.create({
baseURL: 'https://uselessfacts.jsph.pl/api/v2/facts'
})


apiClient.interceptors.request.use(request => {
    console.log(`${request.baseURL}${request.url}`)
    console.log(`Requesting: ${request.method} ${request.url}`)
    return request
})

apiClient.interceptors.response.use(response => {
    console.log('View you fun fact!');
    return response;
}, error => {
    console.error('Could not fetch fun fact.');
    return Promise.reject(error);
});

app.get('/api/fun-fact', async (req, res) => {
    try {
        
        const { language } = req.query

        let response

        if (language) {
            response = await apiClient.get(`/random?language=${language}`);
        } else {
            response = await apiClient.get('/random');
        }

        const transformedData = `{ "fact" : "${response.data.text}" }`

    
        res.send(transformedData);

    } catch (error) {
        res.status(500).json({ error: error.message})
        console.error(error.message)
    }

})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

