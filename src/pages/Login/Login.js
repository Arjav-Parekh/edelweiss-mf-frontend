import React from 'react';
import './Login.css'
import Logo from './ed.png'
import Logo1 from './ed1.png'
import Set from './settings.png'
import Snap from './click.png'
import Down from './down-arrow.png'
import Footer from '../../components/Footer';

function Login(){
    return(
        <>
             <div className="header">
          <div className="row head-row">
            <div className="col-md-6">
              <img src={Logo} alt="" style={{height: '72px', width: 'auto', marginLeft: '18%'}} />
            </div>
            <div className="col-md-6">
              <img src={Logo1} alt="" style={{height: '72px', width: 'auto', marginLeft: 'auto', marginRight: '15%', display: 'block'}} />
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="login-card">
            <div className="row">
              <div className="col-md-6 login-col">
                <h2 style={{fontWeight: 700, fontSize: '28px'}}>Login</h2>
                <h4 style={{fontWeight: 400, color: 'gray', fontSize: '16px'}}>Login using registered ARN and PAN</h4>
                <br />
                <input type="text" name="ARN" placeholder="ARN Number" />
                <input type="text" name="ARN" placeholder="PAN" style={{marginTop: '48px'}} />
                <br />
                <button type="submit" name="submit" className="submit-button">SUBMIT</button>
              </div>
              <div className="col-md-6 right-col" style={{textAlign: 'center'}}>
                <h2 style={{fontSize: '23px', color: '#feb126', fontWeight: 600}}> Manage and amplify your communications with your investors</h2>
                <br /><br />
                <div className="row">
                  <div className="col-md-4">
                    <div className="circle-card">
                      <img src={Set} alt="" height="60px" width="auto" style={{marginTop: '30%'}} />
                    </div>
                    <h6 style={{lineHeight: '6px'}}>Manage</h6>
                    <p style={{color: 'rgb(129, 127, 127)', fontSize:"14px"}}>Marketing collateral</p>
                  </div>
                  <div className="col-md-4">
                    <div className="circle-card">
                      <img src={Snap} alt="" height="70px" width="auto" style={{marginTop: '28%'}} />
                    </div>
                    <h6 style={{lineHeight: '6px'}}>Easy</h6>
                    <p style={{color: 'rgb(129, 127, 127)', fontSize:"14px"}}>Cobrand in few clicks</p>
                  </div>
                  <div className="col-md-4">
                    <div className="circle-card">
                      <img src={Down} alt="" height="50px" width="auto" style={{marginTop: '30%'}} />
                    </div>
                    <h6 style={{lineHeight: '6px'}}>Download</h6>
                    <p style={{color: 'rgb(129, 127, 127)', fontSize:"14px"}}>Videos, pdf, gifs and more</p>
                  </div>
                </div>
                <button className="btn  demo-button"><i className="far fa-play-circle" /> Demo Video</button>
              </div>
            </div>
          </div>
        </div>
        <Footer   />
        </>
    );
}

export default Login;