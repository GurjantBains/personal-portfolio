import React from 'react'
import './navbar.scss'
import Sidebar from '../sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({setb}) => {
  const ballB=["just","spring","tween"]
  let currbb = 0
  function changeBall(){
    if(currbb>=ballB.length-1){
      currbb=0;
    }else{
      currbb+=1;
    }
    setb(ballB[currbb])
    toast.success('🦄 Ball Behaviour Changed!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

    
  }

  return (
    <div className='navbar'>
    <Sidebar/>
        <div className='wrapper'>
            <span>Gurjant Singh</span>
            <div className='socials'>
                <a href='#'><img src='facebook.png' /></a>
                <a href='#'><img src='instagram.png' /></a>
                <a href='#'><img src='youtube.png' /></a>
                <a href='#'><img src='dribbble.png' /></a>
            </div>
        <button className='changeCursor' onClick={changeBall}>Change Ball</button>
      <ToastContainer/>

        </div>
    </div>
  )
}

export default Navbar