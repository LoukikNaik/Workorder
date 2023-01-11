import React from 'react'
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io'
import { useState } from 'react'
import ArrowIcon from './ArrowIcon'
import Workitem from './Workitem'
var style={
    mainContainer:{
        paddingLeft: "1.25rem",
        display: "flex",
        // display: "block",
        // justifyContent: "space-between",
    },
    vl:{
        borderLeft: "2px solid black",
        height: "16px",
        opacity: "0.1",
    },
    hl:{
        borderTop: "2px solid black",
        width: "16px",
        paddingBottom: ".8rem",
        opacity: "0.1",
        // paddingRight: "1rem",
    },
    check:{
        paddingLeft: "1rem",
        display: "flex",
        // paddingTop: "0.3rem",
    },
    txt:{
        paddingLeft: "1rem",
        paddingTop: "0.3rem",
    },
    txt1:{
        paddingTop: "0.3rem",
        paddingLeft: "23.3rem",
    },
    txt2:{
        paddingTop: "0.3rem",
        paddingLeft: "17.4rem",
    },
    txt3:{
        paddingTop: "0.3rem",
        paddingLeft: "17.3rem",
        cursor: "pointer",
    },
    workitem:{
        display: "none",
    },
    input:{
        cursor: "pointer",
    }
}
// style.workitem.display="none";
function Activity(props) {
    // style.workitem.display="none";
    const [txt, setTxt] = useState(1);
    function changedisplay(){
        var a=document.getElementById(props.num);
        if(a.style.display=='none'){
            a.style.display='block';
            setTxt(1)
        }
        else{
            a.style.display='none';
            setTxt(0)
        }
    }
    return (
        <div>
            <div style={style.mainContainer}>
                <div>
                    <div style={style.vl}></div>
                    <div style={style.hl}></div>   
                </div>
                <div style={style.check}>   
                    <input style={style.input} type="checkbox"/> <div style={style.txt}> Acitivity {props.num[1]} </div>
                </div>
                <div style={style.txt1}>  567.80  </div>
                <div style={style.txt2}> ₹2,98,679 </div>
                <div 
                onClick={changedisplay}
                style={style.txt3}> 
                    <ArrowIcon txt={txt} />
                </div>
            </div>
            <div id={props.num}>
                <Workitem num={props.num + "1"}/>
                <Workitem num={props.num + "2"}/>
                <Workitem num={props.num + "3"}/>
            </div>
        </div>
    )
}

export default Activity