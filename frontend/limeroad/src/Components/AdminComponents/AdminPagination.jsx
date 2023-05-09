import React from 'react'

const AdminPagination = ({page,handlePage}) => {
  return (
    <div style={{ marginTop: "50px", marginButtom: "50px" }}>
      <button
        style={{
          fontWeight: "bolder",
          width: "150px",
          height: "30px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
        }}
        onClick={() => handlePage(-1)}
        disabled={page==1}
      >
        Previous
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
      >
        {page}
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
        onClick={() => handlePage(1)}
      >
        Next
      </button>
    </div>
  );
}

export default AdminPagination;