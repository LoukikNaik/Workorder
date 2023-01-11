import React from 'react'
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io'


function ArrowIcon(props) {
    if(props.txt==1){
        return <IoIosArrowUp size='1.25rem'/>
    }
    else{
        return <IoIosArrowDown size='1.25rem'/>
    }
}

export default ArrowIcon