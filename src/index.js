
import 'dotenv/config'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(express.json());
server.use(cors());



server.get('/ping', (req, resp) => {
    resp.send('pong');
})
server.get('/dobro/:numero', (req, resp) => {
    let numero = Number(req.params.numero);
    let dobro = numero * 2;

    let resposta = {
        dobro: dobro
    }

    resp.send(resposta);


})


server.get('/somar', (req, resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);


    let c = a + b;
    resp.send({
        soma: c
    })
})


server.post('/somar', (req, resp) => {
    let a = req.body.a;
    let b = req.body.b;


    let c = a + b;
    resp.send({
        soma: c
    })
})

server.get('/temperatura/:numero', (req, resp) => {
    let t = Number(req.params.t);
    let temperatura = t = 0;
    msgm = "";
    if (temperatura >= 37) {
        msgm = " Esta com febre parça";
    }

    else if (temperatura <= 35) {
        msgm = "ta geladao mano";
    }

    resp.send(temperatura);


})
server.get('/dia2/corprimaria/:cor', (req, resp) => {
    const cor = req.params.cor;

    let primaria = false;
    if (cor == 'azul' || cor == 'amarelo' || cor == 'vermelho') {
        primaria = true
    }
    else {
        primaria = false
    }
 
    resp.send({ primaria: primaria });


})

server.post('/dia2/ingressocinema', (req, resp) => {
    let { qtdInt, qtdMeia, dia, nacionalidade } = req.body;

    let total = 0;
    if (nacionalidade == 'brasileira') {
        total = (qtdInt + qtdMeia) * 5;
    }
    else if (dia == "quarta") {
        total = (qtdInt + qtdMeia) * 14.25;
    }
    else {
        total = (qtdInt * 28.5) + (qtdMeia * 14.25);
    }

    resp.send({
        total: total
    });


})












server.listen(process.env.PORT,
    () => console.log(`Api disponivel na porta ${process.env.PORT}`));