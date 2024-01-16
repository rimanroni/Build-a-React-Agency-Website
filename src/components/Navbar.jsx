import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setSticky] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 100){
                setSticky(true)
            }else{
                setSticky(false)
            }
        }
    })
    
    return (
        <div>
            Navbar  
        </div>
    );
};

export default Navbar;