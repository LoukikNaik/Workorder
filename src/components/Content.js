import React from 'react'
import Task from './Task'
const style={
    contentHeader:{
        display: "flex",
        justifyContent: "space-between",
        borderColor: "black",
        padding: "0.6rem",
        borderWidth: "0.1rem",
        borderStyle: "solid",
        borderColor: "#a3cdff",
        backgroundColor: "#a3cdff",
    },
    mainContainer:{
        padding: "1.25rem",
    },
    individualHeading: {
        paddingRight: "19.7rem",
    },
    individualHeading1:{
        // paddingLeft: "1rem",
        paddingRight: "2rem",
        display: "flex",
    },
    individualHeading2:{
        paddingLeft: "1rem",
        paddingRight: "8rem",
    },
    side:{
        fontSize: "0.8rem",
    },
    input:{
        cursor: "pointer",
    }
}
function Content() {
    return (
        <div style={style.mainContainer}>
            <div style={style.contentHeader}>
                <div style={style.individualHeading1}>
                    <input style={style.input} type="checkbox"/> <div style={style.individualHeading2}>Packages</div>
                </div>
                <div> Rate <i style={style.side}>(in sqft)</i></div>
                <div style={style.individualHeading}> Total </div>
            </div>
            <Task num='1' />
            <Task num='2'/>
            <Task num='3'/>
            <Task num='4'/>
            <Task num='5'/>
        </div>
    )
}

export default Content