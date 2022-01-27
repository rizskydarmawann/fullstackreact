import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try{
    await db.authenticate();
    console.log('Sukses koneksi database...');
}catch(error){
    console.error('Koneksi databes error:', error );
}

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);



app.listen(5000, () => console.log('server running at 5000'));
