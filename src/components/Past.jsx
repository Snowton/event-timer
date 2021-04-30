import React from "react"
import Event from "./Event.jsx"

const Past = (props, children) => {
    return (
        <div>
        <h1>Past Events</h1>
        {props.list.map((event, index) => <Event key={index} id={index} event={event}></Event>)}
        </div>
    );
}

export default Past