import React from "react";
import "./body.css";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import xyz from "../Assets/1.jpg";
import { tickMark, CrossMarkYes, CrossMarkNo,missingProd,QuantitynotSame,priceUpdated } from "../redux/mySlice";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function Body() {
  const mydata = useSelector((state) => state.cartslice.cart);
console.log(mydata[0])
  const dispatch = useDispatch();

  const handleTick = (id) => {
    dispatch(tickMark(id));
  };

  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState();
  

  const handleCrossNo = (id) => {
    dispatch(CrossMarkNo(id));
    setShow(false);
  };
  const handleCrossYes = (id) => {
    dispatch(CrossMarkYes(id));
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleEditClose = () => setEdit(false);
  const handleShow = (id) => {
    setVal(id);
    setShow(true);
  };
  console.log(mydata)
  const handleEdit = (id) => {
    setEdit(true);
    setVal(id)
  
  };
  const handlemissing = (id) => {
    dispatch(missingProd(id))
  };
  
  return (
    <div className="body-container">
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Missing product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Is 'Chicken Breast Fillets,Boneless...' Urgent?</Modal.Body>
        <Modal.Footer>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => handleCrossNo(val)}
          >
            <b>No</b>
          </span>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => handleCrossYes(val)}
          >
            <b>Yes</b>
          </span>
        </Modal.Footer>
      </Modal>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={edit}
        onHide={handleEditClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Chicken Breast Fillets, Boneless matuu maMarinated...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="r22" style={{position:"relative"}}>
                <span>
                    <img className="imgmodal"src={xyz} alt=""/>
                </span>
                <span className="editDetails">
                    <span>Price($)<input type="number"  value={val !==undefined?mydata[val-1].price:"0"} onChange={()=>{}} /></span>
                    <span>Quantity <button className="send-20">-</button><input type="number" value={val !==undefined?mydata[val-1].quantity:"0"}/><button className="send-20" >+</button>   X 6 + 1LB</span>
                    <span>Total :{val !== undefined?mydata[val-1].total:"0"}</span>
                </span>
            </div>
            <div className="boot"style={{position:"relative",marginTop:"15px"}}>
                <h3>Choose Reason</h3><span>(Optional)</span>
            </div>
            <div className="phase">
                <span onClick={()=>handlemissing(val)}>Missing Product</span>
                <span onClick={()=>dispatch(QuantitynotSame(val))}>Quantity is not the same</span>
                <span onClick={()=>dispatch(priceUpdated(val))}>Price is not the same</span>
                <span onClick={()=>{}}>Other</span>
            </div>
            <div style={{display:"flex",justifyContent:"flex-end", marginRight:"20px",marginTop:"20px"}}>
                <span className="m-buttons"><button className="cancel" onClick={()=>setEdit(false)}>Cancel</button><button className="send" onClick={handleEditClose}>Send</button></span>
            </div>
        </Modal.Body>
      </Modal>

      <div className="detail-card">
      <Table  border="none" hover>
      
      <tbody>
        <tr >
          <td>Supplier</td>
          <td>Shipping Date</td>
          <td>Total</td>
          <td>Category</td>
          <td>Department</td>
          <td>Status</td>
        </tr>
        <tr >
          <td><b>East coast fruits & vegitables</b></td>
          <td><b>Thu,Feb 10</b></td>
          <td><b>$15028.3</b></td>
          <td><b><i className="fa-solid fa-person"></i><i className="fa-solid fa-person-digging"></i>
<i className="fa-solid fa-toilet"></i><i className="fa-solid fa-glass"></i></b></td>
          <td><b>300-444-678</b></td>
          <td><b>Awaiting Your Approval</b></td>
        </tr>
        </tbody></Table>
        
      </div>
      <div className="data-card">
        <div className="searchdata">
          <input type="text" placeholder="search" />
          <span className="spaceb">
            <button className="additem">Add item</button>
            <span>
              <i className="fa-solid fa-print colg "></i>
            </span>
          </span>
        </div>
        <div className="datatable">
          <Table border="left" hover>
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mydata.map((element, index) => {
                return (
                  <tr key={index}>
                    <td className="width100">
                      <img className="logo" src={xyz} alt="" />
                    </td>
                    <td className="w-25">{element.name}</td>
                    <td className="width150">{element.brand}</td>
                    <td className="width100">{element.price}/6+1LB</td>
                    <td className="width100">{element.quantity} X6+1LB</td>
                    <td className="width100">${element.total}</td>
                    <td className="snt">
                      <span className={`data ${element.class}`}>{element.status}
                      </span>
                      <span className="r1">
                        <i
                          className={`fa-solid fa-check ${element.c1}`}
                          onClick={() => handleTick(element.id)}
                        ></i>
                        <i
                          className={`fa-solid fa-xmark ${element.c2}`}
                        //   style={{ color: "red" }}
                          onClick={() => {
                            if(element.status === ""){
                              handleShow(element.id)
                            }
                            else{
                              handleClose()
                            }
                          }}
                        ></i>
                        <span onClick={() =>{
                          if(element.status === ""){
                            handleEdit(element.id)
                          }
                          else{
                            handleEditClose()
                          }
                        }}>Edit</span>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Body;
