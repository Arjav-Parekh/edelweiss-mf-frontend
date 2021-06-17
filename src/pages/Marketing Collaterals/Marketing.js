import React from "react";
import "./Marketing.css";
import Logo from "../Login/ed.png";
import Logo1 from "../Login/ed1.png";
import Footer from "../../components/Footer";
import Down from "../Login/down-arrow.png"
import Filter from "./filter.png"

function Marketing() {
  return (
    <>
      <div className="header">
        <div className="row head-row">
          <div className="col-md-6">
            <img
              src={Logo}
              alt=""
              style={{ height: "72px", width: "auto", marginLeft: "18%" }}
            />
          </div>
          <div className="col-md-6">
            <img
              src={Logo1}
              alt=""
              style={{
                height: "72px",
                width: "auto",
                marginLeft: "auto",
                marginRight: "15%",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="dashboard">
        <div className="row">
        <div className="col-6">
        <h2
            style={{
              fontSize: "20px",
              color: "rgb(114, 113, 113)",
              fontWeight: 600,
              display:"inline-block"
            }}
          >
            Marketing Collaterals
          </h2>
        </div>
        <div className="col-6" >
            <div style={{marginLeft:"auto",width:"fit-content"}}>
            <img
              src={Filter}
              style={{height:"18px",width:"auto", display:"inline-block"}}
            /> | <i class="fas fa-search" style={{color:"#000"}}></i>
 </div> </div></div>
          <hr />
          <div className="row">
            <div
              className="col-md-6"
              style={{ borderRight: "1px solid rgb(173, 173, 173)" }}
            >
              <label
                htmlFor="category"
                style={{ color: "gray", fontWeight: 500, fontSize: "15px" }}
              >
                Category
              </label>
              <br />
              <select name="category" id="category" className="list-select">
                <option value="select">Select</option>
                <option value="other-funds">Other Funds</option>
                <option value="equity-funds">Equity Funds</option>
                <option value="hybrid-funds">Hybrid Funds</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="col-md-6">
              <label
                htmlFor="category"
                style={{ color: "gray", fontWeight: 500 }}
              >
                Sub-Category
              </label>
              <br />
              <select name="category" id="category" className="list-select">
                <option value="select">Select</option>
                <option value="other-funds">Edelweiss Multi-Cap Fund</option>
                <option value="equity-funds">Edelweiss Small Cap Fund</option>
                <option value="hybrid-funds">Edelweiss Mid Cap Fund</option>
                <option value="others">Edelweiss Large Cap Fund</option>
                <option value="others">
                  Edelweiss US Value Equity Off shore Fund
                </option>
                <option value="others">Edelweiss Long Term Equity Fund</option>
              </select>
            </div>
            <div className="col-md-6" style={{ marginTop: "35px" }}>
              <label
                htmlFor="category"
                style={{ color: "gray", fontWeight: 500 }}
              >
                Marketing Content Type
              </label>
              <br />
              <select name="category" id="category" className="list-select">
                <option value="select">Select</option>
                <option value="other-funds">Edelweiss Multi-Cap Fund</option>
                <option value="equity-funds">Edelweiss Small Cap Fund</option>
                <option value="hybrid-funds">Edelweiss Mid Cap Fund</option>
                <option value="others">Edelweiss Large Cap Fund</option>
                <option value="others">
                  Edelweiss US Value Equity Off shore Fund
                </option>
                <option value="others">Edelweiss Long Term Equity Fund</option>
              </select>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <p
            style={{
              color: "rgb(255, 59, 59)",
              paddingLeft: "20px",
              fontWeight: 600,
            }}
          >
            Clear Filter
          </p>
          <br />
          <div className="row table" style={{ textAlign: "left" ,marginBottom:"0"}}>
            <div className="col-2">
              <p>Category</p>
            </div>
            <div className="col-3">
              <p>Sub-Category</p>
            </div>
            <div className="col-1">
              <p>Content Type</p>
            </div>
            <div className="col-2">
              <p>Title</p>
            </div>
            <div className="col-2">
              <p>Without Co-Brand</p>
            </div>
            <div className="col-2">
              <p>Co-Brand</p>
            </div>
          </div>
          <div className="row table-row-info-one" style={{ textAlign: "left" ,marginBottom:"0"}}>
            <div className="col-2">
              <p>Category</p>
            </div>
            <div className="col-3">
              <p>Sub-Category</p>
            </div>
            <div className="col-1">
              <p>Content Type</p>
            </div>
            <div className="col-2">
              <p>Title</p>
            </div>
            <div className="col-2">
             <img
              src={Down}
              alt=""
              style={{ height: "15px", width: "auto" ,display:"inline-block"}}
            /><p style={{display:"inline-block"}}>DOWNLOAD</p>
            </div>
            <div className="col-2">
            <i class="far fa-eye" style={{display:"inline-block"}}></i> | <i class="fas fa-palette" style={{display:"inline-block"}}></i> | <i class="far fa-trash-alt" style={{display:"inline-block"}}></i>
            </div>
          </div>
          <div className="row table-row-info-two" style={{ textAlign: "left" ,marginBottom:"0"}}>
            <div className="col-2">
              <p>Category</p>
            </div>
            <div className="col-3">
              <p>Sub-Category</p>
            </div>
            <div className="col-1">
              <p>Content Type</p>
            </div>
            <div className="col-2">
              <p>Title</p>
            </div>
            <div className="col-2">
            <img
              src={Down}
              alt=""
              style={{ height: "15px", width: "auto" ,display:"inline-block"}}
            /><p style={{display:"inline-block"}}>DOWNLOAD</p>
            </div>
            <div className="col-2">
            <i class="far fa-eye" style={{display:"inline-block"}}></i> | <i class="fas fa-palette" style={{display:"inline-block"}}></i> | <i class="far fa-trash-alt" style={{display:"inline-block"}}></i>
            </div>
          </div>
          <div className="row table-row-info-one" style={{ textAlign: "left" ,marginBottom:"0"}}>
            <div className="col-2">
              <p>Category</p>
            </div>
            <div className="col-3">
              <p>Sub-Category</p>
            </div>
            <div className="col-1">
              <p>Content Type</p>
            </div>
            <div className="col-2">
              <p>Title</p>
            </div>
            <div className="col-2">
            <img
              src={Down}
              alt=""
              style={{ height: "15px", width: "auto" ,display:"inline-block"}}
            /><p style={{display:"inline-block"}}>DOWNLOAD</p>
            </div>
            <div className="col-2">
            <i class="far fa-eye" style={{display:"inline-block"}}></i> | <i class="fas fa-palette" style={{display:"inline-block"}}></i> | <i class="far fa-trash-alt" style={{display:"inline-block"}}></i>
            </div>
          </div>
          <div className="row table-row-info-two" style={{ textAlign: "left" ,marginBottom:"0"}}>
            <div className="col-2">
              <p>Category</p>
            </div>
            <div className="col-3">
              <p>Sub-Category</p>
            </div>
            <div className="col-1">
              <p>Content Type</p>
            </div>
            <div className="col-2">
              <p>Title</p>
            </div>
            <div className="col-2">
            <img
              src={Down}
              alt=""
              style={{ height: "15px", width: "auto" ,display:"inline-block"}}
            /><p style={{display:"inline-block"}}>DOWNLOAD</p>
            </div>
            <div className="col-2">
            <i class="far fa-eye" style={{display:"inline-block"}}></i> | <i class="fas fa-palette" style={{display:"inline-block"}}></i> | <i class="far fa-trash-alt" style={{display:"inline-block"}}></i>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Marketing;
