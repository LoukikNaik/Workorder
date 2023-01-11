// import { NONAME } from 'dns'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
// import IoIosArrowBack from react-icons
import { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import '../css/slidingPlane.css'
const style = {
    header: { 
        display:"flex",
        justifyContent: "space-between",
        padding: "1rem",
    },
    headertitleContainer:{
        display:"flex",
        fontWeight: "700",
        fontSize : "1rem",
    },
    iologo:{
        fontSize: "1.1rem",
        paddingTop: "0.1rem",
    },
    headertitle:{
        paddingLeft: "0.5rem",
        fontWeight: "550",
        fontSize : "1.1rem",
    },
    savbutton:{
        color: "white",
        background: "#5FF4F7",
        borderColor: "#5FF4F7",
        width: "7.5rem",
        height: "2rem",
        textAlign: "center",
        // verticalAlign: "center",
        lineHeight: "2rem",
        boxShadow: "3px 3px 8px lightblue",
        borderRadius: "5px",
        cursor: "pointer",
    },
    savbutton1:{
        position: "fixed",
        right: "30px",
        bottom: "30px",
        color: "white",
        background: "#5FF4F7",
        borderColor: "#5FF4F7",
        width: "7.5rem",
        height: "2rem",
        textAlign: "center",
        // verticalAlign: "center",
        lineHeight: "2rem",
        boxShadow: "3px 3px 8px lightblue",
        borderRadius: "5px",
        cursor: "pointer",
    },
    label1:{
        marginBottom: "0.5rem",
    },
    input1:{
        marginTop: "0.5rem",
        padding:"0.5rem",
        width: "24rem",
        borderRadius: "10px",
        borderColor: "#D5D5D5",
    },
    input:{
        marginTop: "0.5rem",
        padding:"0.5rem",
        width: "25rem",
        borderRadius: "10px",
        borderColor: "#D5D5D5",
    },
    flexing:{
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
    }
}



function Header() {
    const [state, setState] = useState({
        isPaneOpen: false,
    });
    // function func(e){
    //     e.preventDefault();
    //     const tmp=document.getElementById("myForm");
    //     console.log(tmp);
    // }
    return (
        <div style={style.header}>
            <div style={style.headertitleContainer}> 
                <div style={style.iologo} > 
                    <IoIosArrowBack />
                </div>
                <div style={style.headertitle}> Create Workorder </div>
            </div>
            <div 
            style={style.savbutton}
            onClick={() => setState({ isPaneOpen: true })}
            onMouseOver={(e)=>e.target.style.background='#07BFC2'}
            onMouseOut={(e)=>e.target.style.background='#5FF4F7'}
            >
                Save
            </div>
            <SlidingPane
                className="some-custom-class"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.isPaneOpen}
                title="Workorder"
                width="460px"
                // subtitle="Optional subtitle."
                onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                setState({ isPaneOpen: false });
                }}
            >
                <form 
                    id="myForm" 
                    onSubmit={(e)=> {
                        e.preventDefault();
                        const client=document.getElementById("client").value;
                        const commencementDate=document.getElementById("commencementDate").value;
                        const completionDate=document.getElementById("completionDate").value;
                        const rfqCode=document.getElementById('rfqCode').value;
                        console.log(client)
                        console.log(commencementDate)
                        console.log(completionDate)
                        console.log(rfqCode)
                    }}
                >
                    <div style={style.flexing}>
                        <div>
                            <label style={style.label1}>Client</label><br/>
                            {/* <input type="text" id="fname" placeholder="Client Name"/><br/><br/> */}
                            <select style={style.input} name="companies" id="client" placeholder="Client Name"> 
                                <option></option>
                                <option value='A'>A</option>
                                <option value='B'>B</option>
                                <option value='C'>C</option>
                            </select><br/><br/>
                            <label >Date of Commencement</label><br/>
                            <input style={style.input1} type="text" id="commencementDate" placeholder="dd/mm/yyyy" pattern='^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$'/><br/><br/>
                            <label >Date of Completion</label><br/>
                            <input style={style.input1} type="text" id="completionDate" placeholder="dd/mm/yyyy" pattern='^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$'/><br/><br/>
                            <label >RFQ Code</label><br/>
                            <input style={style.input1} type="text" id="rfqCode" placeholder="RFQ Code"/><br/><br/>
                        </div>
                        <div>
                            <input 
                            onMouseOver={(e)=>e.target.style.background='#07BFC2'}
                            onMouseOut={(e)=>e.target.style.background='#5FF4F7'}
                            style={style.savbutton1} 
                            type="submit" 
                            value="Done"
                            />
                        </div>
                    </div>
                </form> 
                {/* <br /> */}
            </SlidingPane>
        </div>
    )
}

export default Header