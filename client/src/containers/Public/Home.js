import React from "react";
import Header from './Header'
import {Outlet} from "react-router-dom";

const Home=()=> {
    return (
        <div className={'w-1100 m-auto h-full border border-red-500 '} >
            <Header />
            <div className='w-full'>
          <Outlet/>
            </div>


        </div>
    )
}
export default Home
