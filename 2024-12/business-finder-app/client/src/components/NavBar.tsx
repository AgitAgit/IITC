import './NavBar.css';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import MyModal from './MyModal';


export default function NavBar() {
  const style = {
    dropdownMenuItem: 'hover:bg-red-100'
  }
  const navigate = useNavigate();
  const [businessModal, setBusinessModal] = useState(false);

  return (
    <div>
      <div className='flex justify-around'>
        <div onClick={() => navigate('/')}>LOGO</div>
        <input className='border border-1'></input>
        <DropdownMenu>
          <DropdownMenuTrigger>Elpy for Business</DropdownMenuTrigger>
          <DropdownMenuContent className='bg-white'>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem className='bg-white hover:bg-green-50'>Profile</DropdownMenuItem>
            <DropdownMenuItem className='drop-down-element'>Billing</DropdownMenuItem>
            <DropdownMenuItem className={style.dropdownMenuItem}>Team</DropdownMenuItem>
            <DropdownMenuItem className='drop-down-element'>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div></div>
      <button onClick={() => navigate('/')}>Home</button>
      <hr></hr>
    </div>
  )
}
