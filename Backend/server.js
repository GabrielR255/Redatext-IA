import express from 'express'
import routeropenai from './src/routes/router.js'
import cors from 'cors'

const app = express()


app.use(express.json())
app.use(cors())

app.use('/api', routeropenai )


const PORT = 3010

app.listen(PORT, () => {

    console.log(`Servidor autenticado na porta ${PORT}`)
})