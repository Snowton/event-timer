import React from "react"
import TimerElement from "./TimerElement.jsx"

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: Math.floor((props.event.date - Date.now()) / 1000),
        }
    }

    render() {
        const {type} = this.props
        const {done, name, id, date} = this.props.event
        // console.log(this.state.seconds)

        if(done) {
            return <TimerElement type={type} date={date} name={name}></TimerElement>

        } else {
            const {seconds} = this.state
    
            this.timeout = setTimeout(() => {
                if(Math.floor((date - Date.now()) / 1000) > 0) {
                    this.setState((state) => ({seconds: Math.floor((date - Date.now()) / 1000)}))
                } else {
                    this.props.onEnd(id)
                    console.log(id, seconds, date, Math.floor((date - Date.now()) / 1000))
                }
            }, 1000)
    
            return (<>
                <TimerElement type={type} date={date} seconds={seconds} name={name}></TimerElement>
            </>)
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
}

export default Timer;