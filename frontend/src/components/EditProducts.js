import React, {useState,useEffect} from "react";
import axios from "axios";
import { Link, useHistory,useParams } from "react-router-dom";

const EditProducts = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();
  const {id} = useParams();

  const updateProduct = async (e) =>{
      e.preventDefault();
      await axios.patch(`http://localhost:5000/products/${id}`,{
        title : title,
        price :price
      });
      history.push("/");
  }

  useEffect(() => {
      getProductsById();
  }, []);

  const getProductsById = async () =>{
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      setTitle(response.data.title);
      setPrice(response.data.price);
  }

  return (
    <div>
      <form onSubmit={updateProduct}>
        <div className="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input 
              className="form-control" 
              type="text" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />      
        </div>
        <div className="form-group">
            <label for="exampleInputprice">Price</label>
            <input 
              className="form-control" 
              type="text" 
              id="exampleInputprice" 
              aria-describedby="priceHelp" 
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
            />      
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
        <Link to="/" className="btn btn-warning">Back</Link>
      </form>
      {title} - {price}
    </div>
  );
};

export default EditProducts;
