const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333; 

const mulheres = [
    {
        nome: 'Vanessa Xavier',
        imagem: 'https://github.com/xavmxs.png',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'http://bit.ly/3JCX8qP',
        minibio: 'Founder & CEO'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://bit.ly/3FkpFaz',
        minibio: 'hacker antirracista'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)

}

function mostraPorta(){
    console.log("servidor rodando na porta: ", porta);
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)