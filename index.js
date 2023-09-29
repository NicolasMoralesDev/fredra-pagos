import  express  from "express";
import paymentRoutes from "./src/routes/payment.routes.js"
import { PORT } from "./src/config.js";
import morgan from "morgan";
import cors from "cors"

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors()); 
app.use(paymentRoutes);
app.listen(PORT);
 

console.log("Server on port ", 4000);