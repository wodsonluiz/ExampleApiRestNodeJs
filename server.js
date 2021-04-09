const bodyParser = require('body-parser');

const app = require('./config/express')();
const port = app.get('port');

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.get('/', (req, res) =>{
    res.render('index.ejs')
})

app.post('/show', (req, res) => {
    console.log('Hellor again...')
})