import path from 'path';
import express from 'express';

import questions from './questions.js';


//////////////////////////////////////
//  EXPRESS
//////////////////////////////////////


const app = express();

app.disable('x-powered-by');
app.use(express.static('public'));
app.use(express.json());


//////////////////////////////////////
//  ROUTES
//////////////////////////////////////

app.get('/api/v1/start', (req, res) => {
    const question = questions.find(q => q.id === 1);
    const { responseIndex, ...rest } = question;

    res.send(rest);
});

app.post('/api/v1/answers', (req, res) => {
    if (isNaN(req.body.id) || isNaN(req.body.response)) return res.sendStatus(400);

    const question = questions.find(q => q.id === req.body.id);

    if (!question) return res.sendStatus(400);

    const isValid = question.responseIndex === req.body.response;
    const nextQuestion = questions.find(q => q.id === req.body.id + 1);
    let next = null;

    if (nextQuestion) {
        const { responseIndex, ...rest } = nextQuestion;
        next = rest;
    }

    res.send({ isValid, next });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});


//////////////////////////////////////
//  MAIN
//////////////////////////////////////


app.listen(8080, () => {
    console.log('Server started.');
});
