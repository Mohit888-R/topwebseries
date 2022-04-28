import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cart from './Cart'
import Header from './Header'

ReactDOM.render( 
  <>
  <Header/>
  <div className='box'>
    <Cart
        imgsrc="http://www.todaytvseries1.com/images/tvseriesinfo/Lupin/Lupin-poster.jpg"
        type="A Netflix Original Series"
        title="LUPIN"
        link="https://www.netflix.com/in/title/80994082"
        />
        <Cart
        imgsrc="https://www.flixwatch.co/wp-content/uploads/81253166.jpg"
        type="A Netflix Original Series"
        title="MAID"
        link="https://www.netflix.com/in/title/81166770"
        />
        <Cart
        imgsrc=" https://i2-prod.mirror.co.uk/incoming/article25539290.ece/ALTERNATES/s1200/1_263889180.jpg"
        type="A Netflix Original Series"
        title="SQUID GAME"
        link="https://www.netflix.com/title/81040344"
        />
        <Cart
        imgsrc="https://dailybayonet.com/wp-content/uploads/2020/02/Untitled-design-17.png"
        type="A Netflix Original Series"
        title="MONEY HEIST"
        link="https://www.netflix.com/title/80192098"
        />
        <Cart
        imgsrc="https://www.carteltec.com/wp-content/uploads/2021/06/1622804406_Sweet-Tooth-Season-2-%C2%BFQue-fecha-de-lanzamiento-de-Netflix.jpg"
        type="A Netflix Original Series"
        title="SWEET TOOTH"
        link="https://www.netflix.com/title/81221380"
        />
  </div> 
  </>
  , document.getElementById("root"));