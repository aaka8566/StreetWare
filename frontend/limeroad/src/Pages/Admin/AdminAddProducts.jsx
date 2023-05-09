import React from 'react'

const AdminAddProducts = () => {


    
  return (
    <div>
      <form>
        <input type="text" placeholder='Image' />
        <input type="text" placeholder='Title'/>
        <input type="number" placeholder='Price'/>
        <input type="text" placeholder="Brand" />
        <select type="text">
            <option value=''>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <input type="text" placeholder='Model' />
        <input type="text" placeholder='Type'/>
        <input type="text" placeholder='Size'/>
        <input type="number" placeholder='Discount' />
        <button>Add Product</button>
      </form>
    </div>
  );
}

export default AdminAddProducts;