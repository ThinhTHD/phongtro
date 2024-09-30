import React from "react";
import logo from '../../assets/logowithoutbg.png'
import {Button} from "../../components"

const Header=()=> {
    return (
        <div className={'w-1100 flex items-center justify-between'}>
            <img
                src={logo}
                alt="logo"
                className='w-[240px] h-[70px] object-contain'
            />
            <div className='flex items-center gap-1'>
                <small> phongtro123 xin chao</small>
                <Button text={'Register'} textColor='text-white' bgColor='bg-[#3961fb]' />
                <Button text={'Login'} textColor='text-white' bgColor='bg-[#3961fb]' />
                <Button text={'Post new'} textColor='text-white' bgColor='bg-secondary-2' />
            </div>
        </div>

    )
}
export default Header
