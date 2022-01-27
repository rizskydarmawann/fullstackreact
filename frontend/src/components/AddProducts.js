import React, {useState} from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const AddProducts = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();
  const saveProduct = async (e) =>{
      e.preventDefault();
      await axios.post('http://localhost:5000/products',{
        title : title,
        price :price
      });
      history.push("/");
  }

  return (
    <div>
      <form onSubmit={saveProduct}>
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
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-warning">back</Link>
      </form>
      {title} - {price}
    </div>
  );
};

export default AddProducts;
