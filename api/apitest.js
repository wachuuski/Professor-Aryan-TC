const https = require('https')

https.get('https://pokeapi.co/api/v2/pokemon/ditto ', {}, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', (_) => {
        dittoData = JSON.parse(data);
        console.log(dittoData.abilities)
    });
});

