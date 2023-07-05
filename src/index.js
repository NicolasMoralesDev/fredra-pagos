import { express } from "express";
import paymentRoutes from "./routes/payment.routes.js"
import { PORT } from "./config.js";
import morgan from "morgan";

const app = express();
app.use(paymentRoutes);
app.use(morgan("dev"));
app.listen(PORT);
console.log("Server on port ", 3000);