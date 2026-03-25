import express from 'express'
import path from 'path'
import exphbs from 'express-handlebars'

const app = express()
const __dirname = path.resolve()


const PORT = process.env.PORT || 3005

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//static File
app.use(express.static(path.join(__dirname, 'src/public')))

//configuracion de handlebars
app.set("view engine", 'hbs')
app.set("views", path.join(__dirname, 'src/views'))

app.engine("hbs", exphbs.engine({
    defaultLayout: 'main',
    layoutDir: path.join(__dirname, 'src/views/layouts'),
    extname: '.hbs'
}))



//rutas


app.listen(PORT, ()=>{
    console.log(`Server runnig on port http://localhost:${PORT}`)
})