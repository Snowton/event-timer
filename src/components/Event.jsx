import React from 'react'
const {useState, useEffect} = React

class Event extends React.Component {
    constructor(props, children) {
        super(props)
        this.state = {
            seconds: Math.floor((props.event.date - Date.now()) / 1000),
            ack: false,
        }
    }
    // let ack = false

    help() {
        return this.props.change(this.props.id)
    }

    componentDidMount() {
        let isMounted = true;
        const {seconds} = this.state

        this.interval = setInterval(() => {
            // this will run every second!
            this.setState(state => {
                return {seconds: state.seconds - 1}
            });
        }, 1000);
    }

    // componentDidUpdate() {
    //     if(this.props.future && this.state.seconds < 0 && !this.state.ack) {
    //         console.log("hii")
    //         this.help()
    //     }
    // }

    shouldComponentUpdate() {
        if(this.props.future && this.state.seconds < 0 && !this.state.ack) {
            return this.help()
        }
        console.log(!(this.props.future && this.state.seconds < 0 && !this.state.ack))
        return true
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        
    }

    render = () => {
        const {seconds} = this.state

        return (
        <div>
            {Math.floor(seconds / (3600 * 24))} days {Math.floor(seconds / 3600) % 24}:{Math.floor(seconds / 60) % 60}:{seconds % 60}
        </div>
        )
    }
}

export default Event