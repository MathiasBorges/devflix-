const express = require('express');
const routes = express.Router();

const usuarios = [
    { id: 0, nome: 'Admin', email: 'adminMaster@gmail.com', senha: '666Senha' }
];

routes.post('/login', (req, res) => {
    const { email, senha } = req.body;

    const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha===senha);

    if (usuario) {
        res.status(200).json(usuario);
    } else {
        res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }
});

routes.post('/prelogin', (req, res) => {
    console.log(req.body); // para ver o que está chegando


    const { email } = req.body;
    
    if (!email) {
        return res.status(400).json({ mensagem: "O campo 'email' é obrigatório." });
    }

    const usuario = usuarios.find(usuario => usuario.email === email);

    if (usuario) {
        res.status(200).json(usuario);
    } else {
        res.status(404).json({ mensagem: 'Usuário não encontrado' }); // Código HTTP 404 para não encontrado
    }
});



routes.post('/sign', (req, res) => {
    const { nome, email, senha } = req.body;

    const usuario = usuarios.find(usuario => usuario.email === email);

    if (usuario) {
        res.status(409).json({mensagem:'Usuário já existe'});
    } else {
        const novoUsuario= {id:usuarios.length+1, nome, email, senha}
        usuarios.push(novoUsuario)
        res.status(201).json({ mensagem: 'Usuário criado', usuario: novoUsuario });
    }
});

module.exports = routes;