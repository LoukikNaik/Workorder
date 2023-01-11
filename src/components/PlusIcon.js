import React from 'react'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'
function PlusIcon(props) {
    if(props.txt===0){
        return <div><AiOutlinePlus color='#5FF4F7' size='1.5rem'/></div>
    }
    else{
        return (
            <div>
                <AiOutlineMinus color='#5FF4F7' size='1.5rem'/>
            </div>
        )
    }
}

export default PlusIcon