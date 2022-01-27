import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import {confirmAlert} from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';

const Productslist = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProduct(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    getProducts();
  }

  // function deleteConfirm(){
  //   confirmAlert({
  //     title : 'Product List',
  //     message:"Apaka anda yakin menghapus data ini ?",
  //     buttons : [
  //       {
  //         label : 'delete',
  //         onClick: ()=> deleteProduct()
  //       },
  //       {
  //         label : 'Batal',
  //         onClick: ()=> {}
  //       }
  //     ]
  //   })
  // }

  return (
    <div>
      <Link to="/add" className="btn btn-primary">Add New</Link>
      <table className="table table-hover table-bordered">
        <thead>
          <tr >
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/edit/${product.id}`} className="btn btn-sm text-white btn-info">edit</Link>
                <button onClick={ ()=> {if(window.confirm('Delete the item?')) {deleteProduct(product.id)}}} className="btn btn-sm text-white btn-danger">
                {/* <button onClick={ ()=>deleteConfirm(product.id)} className="btn btn-sm text-white btn-danger"> */}
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productslist;
