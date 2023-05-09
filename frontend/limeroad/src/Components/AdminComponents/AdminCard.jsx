import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteProduct, getAllProducts } from '../../Redux/AdminReducer/AdminAction';



const AdminCard= ({_id,image,brand,price,title,gender,model,offer_percent,size,type}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id)=>{
    dispatch(DeleteProduct(id))
    dispatch(getAllProducts())
  }
  return (
    <div
      key={_id}
      style={{
        width: "400px",
        height: "750px",
        position: "relative",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      }}
    >
      <img src={image} alt={title} style={{ height: "500px", width: "100%" }} />
      <div
        style={{
          position: "absolute",
          top: "300px",
          backgroundColor: "rgb(255,255,255,.2)",

          color: "black",
          fontWeight: "bolder",
          padding: "10px",
        }}
      >
        {title}
      </div>
      <h3
        style={{
          fontWeight: "bolder",
          textAlign: "left",
          display: "flex",
          marginTop: "20px",
        }}
      >
        <FaRupeeSign />
        {price}
      </h3>
      <h4
        style={{
          fontSize: "15px",
          color: "#78909C",
          textAlign: "left",
          paddingLeft: "20px",
        }}
      >
        By {brand}
      </h4>
      <p
        style={{
          fontSize: "15px",
          color: "#78909C",
          textAlign: "left",
          paddingLeft: "20px",
        }}
      >
        {gender}
      </p>
      <p
        style={{
          fontSize: "15px",
          color: "#78909C",
          textAlign: "left",
          paddingLeft: "20px",
        }}
      >
        {model}
      </p>
      <p
        style={{
          fontSize: "15px",
          color: "#78909C",
          textAlign: "left",
          paddingLeft: "20px",
        }}
      >
        {type}
      </p>
      <p
        style={{
          fontSize: "15px",
          color: "#78909C",
          textAlign: "left",
          paddingLeft: "20px",
        }}
      >
        {offer_percent}%
      </p>

      <p>
        {size.map((el) => {
          return (
            <div
              style={{
                fontSize: "15px",
                color: "#78909C",
                float: "left",
                paddingLeft: "20px",
              }}
            >
              {el}
            </div>
          );
        })}
      </p>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <button
          style={{
            fontWeight: "bolder",
            width: "150px",
            height: "30px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
          }}
          onClick={() => navigate(`/editproduct/${_id}`)}
        >
          Edit
        </button>
        <button
          style={{
            fontWeight: "bolder",
            width: "150px",
            height: "30px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
          }}
          onClick={() => {
            handleDelete(_id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default AdminCard;