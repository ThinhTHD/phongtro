import React, { useCallback } from "react";
import logo from '../../assets/logowithoutbg.png';
import { Button } from "../../components";
import icons from "../../utils/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/constant";

const { AiOutlinePlusCircle } = icons;

const Header = () => {
    const navigate = useNavigate();

    const goLogin = useCallback(() => {
        navigate(path.LOGIN);
    }, []);

    return (
        <div className={'w-1100 flex items-center justify-between'}>
            <img
                src={logo}
                alt="logo"
                className='w-[240px] h-[70px] object-contain'
            />
            <div className='flex items-center gap-1'>
                <small> phongtro123 xin chao</small>
                <Button
                    text={'Register'}
                    textColor='text-white'
                    bgColor='bg-[#3961fb]'
                    onClick={goLogin}
                />
                <Button
                    text={'Login'}
                    textColor='text-white'
                    bgColor='bg-[#3961fb]'
                    onClick={goLogin}
                />
                <Button
                    text={'Post new'}
                    textColor='text-white'
                    bgColor='bg-secondary2'
                    IcAfter={AiOutlinePlusCircle}
                />
            </div>
        </div>
    );
}

export default Header;
