import React from 'react'

const style = {
    hrwidthActive:{
        width: "14rem",
        marginLeft: "0rem",
        borderColor:'black',
        borderWidth: "1px",
    },
    hrwidthInactive:{
        // all: "unset",
        width: "14rem",
        marginLeft: "0rem",
        borderWidth: "1px",
        borderColor:'black',
        opacity: "0.5",
    },
    navContainer:{
        paddingLeft: "1.25rem",
        paddingBottom: "1rem",
        display: "flex",
    },
    navtitleActive:{
        textAlign: "center",
        color: "black",
        fontWeight: "500",
        fontSize: "0.9rem",
    },
    navtitleInactive:{
        textAlign: "center",
        color: "black",
        fontWeight: "500",
        fontSize: "0.9rem",
        opacity: "0.3",
    },
    heading:{
        padding: "0.25rem",
    },
}

function Navbar() {
    return (
        <div style={style.navContainer}>
            <div style={style.navtitleActive}>
                <div style={style.heading}>Overview</div>
                <hr style={style.hrwidthActive}/>
            </div>
            <div 
            onClick={(e)=>console.log("Hello World")}
            style={style.navtitleInactive}
            >
                <div style={style.heading}>Other</div>
                <hr style={style.hrwidthInactive}/>
            </div>
        </div>
    )
}

export default Navbar