import React from 'react'

const style={
    mainContainer:{
        paddingLeft: "1.25rem",
        display: "flex",
        // justifyContent: "space-between",
    },
    vl:{
        borderLeft: "2px solid black",
        height: "16px",
        opacity: "0.1",
    },
    vl1:{
        borderLeft: "2px solid black",
        height: "30px",
        opacity: "0.1",
        paddingRight: "2.5rem",
    }
    ,
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
        paddingLeft: "40.2rem",
    },
    txt3:{
        paddingTop: "0.3rem",
        paddingLeft: "29.5rem",
    },
    input:{
        cursor: "pointer",
    }

}

function Workitem(props) {
    return (
        <div style={style.mainContainer}>
            <div style={style.vl1}></div>
            <div>
                <div style={style.vl}></div>
                <div style={style.hl}></div>   
            </div>
            <div style={style.check}>   
                <input style={style.input} type="checkbox"/> <div style={style.txt}> Work Item {props.num[2]} </div>
            </div>
            <div style={style.txt2}> ₹2,98,679 </div>
        </div>
    )
}

export default Workitem