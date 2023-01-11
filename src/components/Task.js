import React from 'react'
import { useState } from 'react'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'
import Activity from './Activity'
import PlusIcon from './PlusIcon'
const style={
    contentHeader:{
        display: "flex",
        justifyContent: "space-between",
        borderColor: "black",
        padding: "0.6rem",
        // borderWidth: "0.1rem",
        // borderStyle: "solid",
        // borderTop: "none",
        // borderBottom: "none",
    },
    mainContainer:{
        // borderStyle: "solid",
        // borderLeft: "1px solid black",
        // display: "flex",
        borderWidth: "0.1rem",
        borderStyle: "solid",
        borderTop: "none",
        borderColor: "#cfcfcf"
        // borderBottom: "none",
    },
    individualHeading: {
        // paddingRight: "1rem",
        // paddingLeft: "5rem",
        paddingTop: "0.25rem",
    },
    individualHeading1:{
        // paddingLeft: "1rem",
        display: "flex",
        paddingTop: "0.25rem",
    },
    individualHeading2:{
        paddingLeft: "1rem",
        paddingRight: "10.4rem",
        paddingTop: "0.25rem",
    },
    individualHeading3:{
        // paddingRight: "rem",
        paddingTop: "0.25rem",
    },
    activity:{
        display: "block",
    },
    plusButton:{
        cursor: "pointer",
    },
    vl:{
        borderLeft: "2px solid black",
        height: "auto",
        opacity: "0.3",
    },
    input:{
        cursor: "pointer",
    }

}
function Task(props) {
    const [txt, setTxt] = useState(1);
    // setTxt(<AiOutlinePlus color='#5FF4F7' size='1.5rem'/>);
    // var txt;
    // txt=1;
    function changedisplay(){
        console.log("Hello");
        var a=document.getElementById(props.num);
        var b=document.getElementsByClassName(props.num);
        console.log(b);
        if(a.style.display=="none"){
            a.style.display="block";
            // b.innerHTML=`<AiOutlineMinus />`
            setTxt(1)
        }
        else{
            a.style.display="none";
            // b.innerHTML=`<AiOutlinePlus color='#5FF4F7' size='1.5rem'/>`
            setTxt(0)
        }
        console.log(txt);
    }
    return (
        <div style={style.mainContainer}>
            <div style={style.contentHeader}>
                <div style={style.individualHeading1}>
                    <input style={style.input}type="checkbox"/> <div style={style.individualHeading2}>Civil {props.num}</div>
                </div>
                <div style={style.individualHeading3}> 567.80 </div>
                <div style={style.individualHeading}> ₹2,98,679 </div>
                <div className={props.num} style={style.plusButton} onClick={changedisplay} > 
                    <PlusIcon txt={txt}/>
                </div>
            </div>
            <div id={props.num}>
                <Activity num={props.num + "1"}/>
                <Activity num={props.num + "2"}/>
                <Activity num={props.num + "3"}/>
                <Activity num={props.num + "4"}/>
            </div>
        </div>
    )
}

export default Task