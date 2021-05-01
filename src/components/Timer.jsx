import React from "react"
import TimerElement from "./TimerElement.jsx"

class Timer extends React.Component {
    constructor(props) {
        super(props)

        const {times, status} = props.event

        this.state = {
            seconds: Math.floor((times[status] ? times[status].time : 0 - Date.now()) / 1000),
        }
    }

    render() {
        const {type} = this.props
        const {status, name, id, times} = this.props.event
        // console.log(this.state.seconds)

        if(status === times.length) {
            return <TimerElement type={type} data={times[status - 1]} name={name}></TimerElement>

        } else {
            const {seconds} = this.state
    
            this.timeout = setTimeout(() => {
                if(Math.floor((times[status].time - Date.now()) / 1000) > 0) {
                    this.setState((state) => ({seconds: Math.floor((times[status].time - Date.now()) / 1000)}))
                } else {
                    this.props.onEnd(id, status)
                }
            }, 1000)
    
            return (
                <TimerElement type={type} data={times[status]} seconds={seconds} name={name}></TimerElement>
            )
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
        this.setState = (state,callback)=>{
            return;
        };
    }
}

export default Timer;