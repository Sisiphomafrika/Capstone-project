import { userRouter, express } from "./controllers/usersControllers.js";
import { productRouter} from  "./controllers/ProductsControllers.js";
import cookieParser from "cookie-parser";
import {errorHandling} from "./middleware/ErrorHandling.js"
import path from "path"
import cors from "cors"
import {config} from "dotenv"
import { orderRouter } from "./controllers/OrdersControllers.js";
config()
const app = express()
const port = +process.env.PORT ||4000
app.use((req, res, next) =>{
  res.header("Access-control-Allow-Origin", "*");
  res.header("Access-control-Allow-Credentials", "true");
  res.header("Access-control-Allow-Methods", "*");
  res.header("Access-control-Request-Methods", "*");
  res.header("Access-control-Allow-Headers", "*");
  res.header("Access-control-Expose-Headers", "Authorization");
  next()
})
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
    cors()
)
app.get('^/$|/style_stash', (req, res) => {
    res.status(200).sendfile(path.join(__dirname, './static/index.html'))
})
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/orders', orderRouter)
app.use(errorHandling)
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})





















