import React from 'react'
import "./Timer.css"

class TimerElement extends React.Component {
    constructor(props, children) {
        super(props)
    }

    render() {
        let {name, type, date} = this.props
        date = new Date(date)

        // const dateString = date.getHours() + ":" + date.getMinutes() + " " + date.getMonth() + ", " + date.getFullYear()
        const dateString = date.toLocaleString();


        if(type === "past") {
            return (
            <><h4>{name}</h4>
            <p>{dateString}</p>
            </>
            )
        }
        const {seconds} = this.props
        const sec = seconds % 60
        const min = Math.floor(seconds / 60) % 60
        const hour = Math.floor(seconds / 3600) % 24
        const day = Math.floor(seconds / (3600 * 24))

        if(type === "future") {
    
            return (
                <>
                <h2>{name}</h2>
                <p>{day} days
                {" " + hour}:{min}:{sec}</p>
                <p>{dateString}</p>
                </>
            )
        }
        if(type === "current") {
    
            return (
                <>
                <h1>{name}</h1>
                <p>{day} days
                {" " + hour}:{min}:{sec}</p>
                <p>{dateString}</p>
                </>
            )
        }
    }
}

export default TimerElement