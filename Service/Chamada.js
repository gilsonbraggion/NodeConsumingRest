const https = require('https');

const getChamadaApi = (req, res) => {

    let url = "https://jsonplaceholder.typicode.com/posts";
    
        https.get(url, (resposta) => {
            let body = "";
        
            resposta.on("data", (chunk) => {
                body += chunk;
            });
        
            resposta.on("end", async () => {
                try {
                    let json = JSON.parse(body);
                    return res.status(200).send(json);
                } catch (error) {
                    console.error(error.message);
                };
            });
        
        }).on("error", (error) => {
            res.status(500).send({message: 'Falha ao chamar a API'});
        });
        
}

module.exports = {
    getChamadaApi
}