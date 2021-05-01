import React from 'react'
import "./Timer.css"

class TimerElement extends React.Component {
    constructor(props, children) {
        super(props)
    }

    render() {
        let {name, type, data} = this.props
        const date = new Date(data.time)

        // const dateString = date.getHours() + ":" + date.getMinutes() + " " + date.getMonth() + ", " + date.getFullYear()
        const dateString = date.toLocaleString();


        if(type === "past") {
            return (
            <div className="timer past"><h2>{name}</h2>
            <p>Ended: {dateString}</p>
            </div>
            )
        }
        const {seconds} = this.props
        const sec = ("0" + seconds % 60).slice(-2)
        const min = ("0" + Math.floor(seconds / 60) % 60).slice(-2)
        const hour = Math.floor(seconds / 3600) % 24
        let day = Math.floor(seconds / (3600 * 24))
        day = day > 0 ? day + (day > 1 ? " days" : " day") : ""
        const timestring = `${data.name}: ${day} ${hour}:${min}:${sec}`

        if(type === "future") {
    
            return (
                <div className="timer future">
                <h2>{name}</h2>
                <p>{timestring}</p>
                <p>{dateString}</p>
                </div>
            )
        }
        if(type === "current") {
    
            return (
                <div className="timer current">
                <h1>{`Next: ${name}`}</h1>
                <p>{timestring}</p>
                <p>{dateString}</p>
                </div>
            )
        }
    }
}

export default TimerElement