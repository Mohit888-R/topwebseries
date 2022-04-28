import React from "react";

function Cart(props){
    return (
        <>
        
        <div className="cards">
            <div className="card">
            <img src={props.imgsrc} alt="" />
            <div className="text">
                <div className="type">
                    {props.type}
                </div>
                
                <div className="title">
                    {props.title}
                </div>
                
                    <a href={props.link} target="_blank"><button>Watch Now</button></a>
                    
                
            </div>
            </div>
        </div>
        </>
    );
}

export default Cart;