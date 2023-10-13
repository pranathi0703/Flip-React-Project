import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
export default function Form() {
    let sno=1;

    const[id,setId]=useState('')
    const[title,setTitle]=useState('')
    const[brand,setBrand]=useState('')
    const[price,setPrice]=useState('')
    const[description,setDescription]=useState('')
    const[image,setImage]=useState('')
    const[ppid,setPpid]=useState('')
    const[productsList,setProductslist]=useState([{}])
    const fetchData=()=>{
          axios.get('http://localhost:3002/products111')
          .then((res)=>setProductslist(res.data))
    }

    

    useEffect(()=>{
        axios.get('http://localhost:3002/products111')
    .then((res)=>setProductslist(res.data))
    },[])
    

    const productData={
        pid:id,
        title:title,
        brand:brand,
        price:price,
        description:description,
        image:image
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(ppid==""){
        axios.post('http://localhost:3002/products111',productData)
        .then((res)=>{
            alert("Successful")
            fetchData();
            setId('')
            setTitle('')
            setBrand('')
            setPrice('')
            setDescription('')
            setImage('')
        })
    }
    else{
        axios.put(`http://localhost:3002/products111/${ppid}`,productData)
        .then((res)=>{
            alert("Successful")
            fetchData()
            setId('')
            setTitle('')
            setBrand('')
            setPrice('')
            setDescription('')
            setImage('')
    })
} }
    const handleEdit=(editdata)=>{
        setId(editdata.pid)
        setTitle(editdata.title)
        setBrand(editdata.brand)
        setPrice(editdata.price)
        setDescription(editdata.description)
        setImage(editdata.image)
        setPpid(editdata.id)

    }
    const handleDelete =(id)=>{
       axios.delete(`http://localhost:3002/products111/${id}`)
        .then((res)=>{
            alert('Product Deleted')
            fetchData()
        })
   }
    useEffect(()=>{
        fetchData()
    },0)
    return (
        <>
    <div className="row justify-content-center">
        <div claaName="col-md-6 Thumbnail">
            <h3 className='text-center text-primary'>Add product</h3>
    <form method='post' onSubmit={handleSubmit}>
        <div className="mb-3">
            <label>Id</label>
            <input type="text" className='form-control' placeholder="Enter Product Id"
            onChange={
                (e)=>{
                    setId(e.target.value)
                }
            }/>
        </div>
        <div className="mb-3">
            <label>Title</label>
            <input type="text" className='form-control' placeholder="Enter Product Title"
            onChange={
                (e)=>{
                    setTitle(e.target.value)
                }
            }/>
        </div>
        <div className="mb-3">
            <label>Brand</label>
            <input type="text" className='form-control' placeholder="Enter Product Brand"
            onChange={
                (e)=>{
                    setBrand(e.target.value)
                }
            }/>
        </div>
        <div className="mb-3">
            <label>Price</label>
            <input type="text" className='form-control' placeholder="Enter Product Price"
            onChange={
                (e)=>{
                    setPrice(e.target.value)
                }
            }/>
        </div>
        <div className="mb-3">
            <label>Description</label>
            <textarea type="text" className='form-control' placeholder="Enter Product Price"
                onChange={
                (e)=>{
                    setDescription(e.target.value)
                }
            }>
            </textarea>
        </div>
        <div className="mb-3">
            <label>Image</label>
            <input type="url" className='form-control' 
            onChange={
                (e)=>{
                    setImage(e.target.value)
                }
                }/>
        </div>
        <div className="mb-3">
            
            <button>Submit</button>
        </div>

    </form>
    </div>
    </div>
    <table className='table table-bordered' style={{color:"black"}}>
    <thead>
        <tr>
            <th>S.No</th>
            <th>Product Id</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    {
            productsList.map((element,index)=>{
               return(
                <>
                <tr>
                <td>{sno++}</td>
                <td>{element.pid}</td>
                 <td>{element.title}</td>
                 <td>{element.brand}</td>
                 <td>{element.price}</td>
                 <td>{element.description}</td>
                 <td><img src={element.image} class='b'/></td>
                 <td><button className='btn btn-primary'  onClick={()=>handleEdit(element)}><i className='fa fa-edit'></i></button>
                 <button className='btn btn-danger' onClick={()=>handleDelete(element.id)}><i className='fa fa-trash'></i></button></td>
                 
                 </tr>
                 </> 
               )
                    
            })
        }
      </tbody>
      </table>

    
  </>
  
    )
}