const express = require("express");
const app = express();
const cors = require("cors");
const server = require("./server");
const userRouter = require("./routes/user.route");
const categoryRouter = require("./routes/category.route");
const productRouter = require("./routes/product.route");

// midlewares
app.use(express.json());
app.use(cors());

server(app);

app.use('/api/v1/user', userRouter)
app.use('/api/v1/category', categoryRouter)
app.use('/api/v1/product', productRouter)