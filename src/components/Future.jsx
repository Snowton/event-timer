import React from "react"
import Event from "./Event.jsx"

const Future = (props, children) => {
    return (
        <div>
        <h1>Future Events</h1>
        {props.list.map((event, index) => <Event key={index} id={index} event={event} change={props.change} future={true}></Event>)}
        </div>
    );
}

export default Future;