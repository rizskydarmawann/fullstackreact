import Products from "../models/productModel.js";

export const getAll = async (req, res) => {
    try{
        const products = await Products.findAll();
        res.json(products);
    }catch(error){
        res.json({message: error.message});
    }
}
export const getById = async (req, res) => {
    try{
        const products = await Products.findAll({
            where:{
                id : req.params.id
                }
            });
            res.json(products[0]);
    }catch(error){
        res.json({message: error.message});
    }
}
export const createP = async (req, res) => {
    try{
        await Products.create(req.body);
        res.json({
            "message": "Product Created"
        });
    }catch(error){
        res.json({message: error.message});
    }
}

export const updateP = async (req, res) => {
    try{
        await Products.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.json({
            "message": "Product Update"
        });
    }catch(error){
        res.json({message: error.message});
    }
}
export const deleteP = async (req, res) => {
    try{
        await Products.destroy({
            where:{
                id:req.params.id
            }
        });
        res.json({
            "message": "Product Delete"
        });
    }catch(error){
        res.json({message: error.message});
    }
}