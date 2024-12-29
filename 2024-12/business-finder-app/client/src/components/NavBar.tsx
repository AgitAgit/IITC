import './NavBar.css';
import React from 'react'
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import MyModal from './MyModal';

const style = {
  dropdownMenuItem: 'hover:bg-red-100',
  button: 'border border-1 rounded p-0.5'
}

export default function NavBar() {
  let searchTimer = null;
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [businessModal, setBusinessModal] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [loginMode, setLoginMode] = useState(true);

  function handleSearchClick() {
    if (!(searchRef && searchRef.current)) return;
    const searchInput = searchRef.current.value;
    navigate('/search', { state: { searchInput } });
  }

  function handleInputChange() {//debounce for handleSearchClick
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { handleSearchClick() }, 500);
  }

  return (
    <div>
      <div className='flex justify-around pt-1 pb-1'>
        <div className='logo' onClick={() => navigate('/')}>ELPY⚪</div>
        <div>
          <input className={`${style.button} mr-1`} ref={searchRef} onChange={handleInputChange}></input>
          <button className={`${style.button}`} onClick={handleSearchClick}>Search</button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className={`${style.button}`}>Elpy for Business 👇</DropdownMenuTrigger>
          <DropdownMenuContent className='bg-white'>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem className='bg-white hover:bg-green-50'>Profile</DropdownMenuItem>
            <DropdownMenuItem className='drop-down-element'>Billing</DropdownMenuItem>
            <DropdownMenuItem className={style.dropdownMenuItem}>Team</DropdownMenuItem>
            <DropdownMenuItem className='drop-down-element'>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className={`${style.button}`}>Log In 👇</DropdownMenuTrigger>
          <DropdownMenuContent className='bg-white'>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            <div className='flex p-1'>
                {loginMode && <div>{`>`}</div>}
                <button className={`${style.button}`} onClick={() => setLoginMode(true)}>Log In</button>
                <button className={`${style.button} ml-auto`} onClick={() => setLoginMode(false)}>Sign up</button>
                {!loginMode && <div>{`<`}</div>}
            </div>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem></DropdownMenuItem> */}
            <div>
              <label>email:</label>
              <input></input>
              <br></br>
              <label>password:</label>
              <input type='password'></input>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <button className={`${style.button}`}>Log In</button> */}
        <button className={`${style.button}`}>My Elpy</button>
      </div>
      {/* <div></div> */}
      {/* <button onClick={() => navigate('/')}>Home</button> */}
      <hr></hr>
    </div>
  )
}
