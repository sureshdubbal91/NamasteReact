import React from "React";
import ReactDOM from "react-dom/client" 

const Header =()=>
{
    return(
        <div className="header">
            
         
             <div className="logo-container">
              <img className="logo"
                 src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
                 </div>
                 <div className="Nav-bar">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>CONTACT Us</li>
                        <li>TO CART</li>
                        </ul>
                 </div>
                
        </div>
    );
};
const ResturdantCard =(props)=>{
    console.log(props);
    return(
        <div className="Resturdant" style={{backgroundColor:"grey"}}>
        
        <img className="PIZZIMG" src="https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg"/>
        <h1>{props.resName}</h1>
        <h3>{props.cuisine}</h3>
        <h3 className="Star">4.4*</h3>
        <h4>₹ 400</h4>
</div>

    );
};

const Body =()=>{
    return(
<div className="Res-Container">
<ResturdantCard resName ="Pizza" cuisine ="Paneer Tomato pizza "/>
<ResturdantCard resName ="KFC" cuisine ="Tomato pizza " />
<ResturdantCard resName ="MacDownld" cuisine ="pizza "/>
<ResturdantCard resName ="SARDAR JI" cuisine ="LARGE pizza "/>
<ResturdantCard resName ="KFC" cuisine ="Tomato pizza "/>
<ResturdantCard resName ="Pizza" cuisine ="Paneer Tomato pizza "/>
<ResturdantCard resName ="KFC" cuisine ="Tomato pizza " />
<ResturdantCard resName ="MacDownld" cuisine ="pizza "/>
<ResturdantCard resName ="SARDAR JI" cuisine ="LARGE pizza "/>
<ResturdantCard resName ="KFC" cuisine ="Tomato pizza "/>
</div>
    
    );
};
const Footer =()=>
{ 
    return(
    <div className="Address">
        <h2>Address</h2>
        <h3>Bhuna Road Tohana 12520</h3>
        <br>
        
        
        
        </br>

    </div>
    )
}
const AppLayout =()=>{
    return( <div className="App">
       <Header/>
     <Body/>
     <Footer/>
     
     
    </div>

    );
};
const root = ReactDOM.createRoot(document.getElementById ("root"));
    root.render(<AppLayout/>);