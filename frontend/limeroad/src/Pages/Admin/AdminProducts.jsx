
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import AdminCard from "../../Components/AdminComponents/AdminCard";
import AdminPagination from "../../Components/AdminComponents/AdminPagination";
import { getAllProducts } from "../../Redux/AdminReducer/AdminAction";
import { Spinner } from "@chakra-ui/react";
import"./Admin.css";



export const AdminProducts = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { allproducts, isLoading } = useSelector((store) => store.AdminReducer);

  const handlePage = (val)=>{
    setPage(page + val);
  }
  useEffect(() => {
    dispatch(getAllProducts(obj));
  }, [page]);
  let obj = {
    params: {
      limit: 10,
      page: page,
    },
  };
  return isLoading? (<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='black.500'
  size='xl'
  marginTop="300px"
/>):(
    <div className="container">
      <div></div>
      <div
        className="adminProductContainer"
        style={{
          width: "90%",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        {allproducts?.map((el) => {
          return <AdminCard {...el} />;
        })}
      </div>
      <div>
        <AdminPagination page={page} handlePage={handlePage}/>
      </div>
    </div>
  );
};

