import React,{Component} from 'react';
import './Page.css';

class Page extends Component{
    render(){
        return(
            <div className="main-container">
                <div className="main-container-left">
                    <div className="title">
                    <h3>Input fields</h3>
                    </div>
                    <form>
                    <div className="main-container-left-first">
                        
                        <p>Enter Name</p>
                        <input type="text" name="Name" placeholder="Saga Lindén"/>
                       <div className="show-hide-password">
                        <p>Password</p>
                        <input type="text" name="Password" placeholder="•••••••••"/>
                        <img src={require("../assets/icon.jpg")}/>
                        </div>
                        <div className="show-hide-password">
                        <p>Password</p>
                        <input type="text" name="Password" placeholder="Pass12345"/>
                        <img src={require("../assets/icon1.jpg")}/>
                        </div>
                    </div>
                    
                    <div className="main-container-left-second">
                    <div className="alerterror">
                         <input type="text" name="InputError" placeholder="Input Error"/>
                         <img src={require("../assets/error.jpg")}/></div>
                    </div>
                    </form>
                </div>
                
                    <div className="main-container-right">
                        <div className="alert-messages">
                            
                            <div className="main-container-right-first">
                               
                                <div className="greencircle">
                                <img src={require("../assets/img.jpg")}/></div>
                                <div>
                                <p>Something went successfuly</p>
                                <button>DONE</button>
                                </div>
                            </div>
                    <div className="main-container-right-second">
                            <div className="redcircle">
                            <img src={require("../assets/attention.jpg")}/></div>
                            <div>
                            <p>Are you sure you want to delete this item?</p>
                            <button>OKAY</button>
                            </div>
                    </div>
                    </div>
                     </div>
            </div>
        );
    }
}
export default Page;
