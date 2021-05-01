import React from "react"
import { Router, Link } from "@reach/router"

import Layout from "../components/Layout.jsx"
import Event from "../components/Event.jsx"
import Future from "../components/Future.jsx"
import Past from "../components/Past.jsx"
import Timer from "../components/Timer.jsx"
import events from "../../events.js"

const {useState, useEffect} = React

// Event 1

// let date = new Date(2021, 4, 1, 10, 30)
// let temp = {date: date.getTime(), name: "testing 1"}
// events.push(temp)

// // Event 2
// date = new Date(2021, 4, 1, 9, 0)
// temp = {date: date.getTime(), name: "testing 2"}
// events.push(temp)

// // Event 0
// date = new Date(2021, 3, 1, 0, 0)
// temp = {date: date.getTime(), name: "testing 3"}
// events.push(temp)

// date = new Date(2021, 3, 2, 5, 0)
// temp = {date: date.getTime(), name: "testing 4"}
// events.push(temp)

// sort((e1, e2) => (e1.date - e2.date))
events = events.sort((e1, e2) => (e1.date - e2.date))
events = events.map((element, index) => ({...element, id: index, done: false}))

class App extends React.Component {

    // const [done, setDone] = useState(false)

    constructor(props) {
        super(props)
        this.state = {
            e: [...events]
        }
    }
    // const [e, setE] = useState([...events])

    // console.log(e);
    // let done = false

    end = (id) => {
        this.setState(old => {
            old.e[id].done = true
            return old
        })

        console.log(this.state.e)
    }

    render() {
        const {e} = this.state
        const future = e.filter(z => !z.done)
        const past = e.filter(f => f.done)
        const current = future[0]
        // console.log(future, past)
        return (<Layout>Future<br />
            {future.slice(1).map(event => <><Timer key={event.id} type={"future"} event={event} onEnd={this.end}></Timer></>)}
            {current ? <><Timer key={current.id} type={"current"} event={current} onEnd={this.end}></Timer></> : <></>}
            Past<br />
            {past.map(event => <><Timer key={event.id} type={"past"} event={event} onEnd={this.end}></Timer></>)}
        </Layout>)
    }

    // let past = []
    // let future = [...events]
    // const [future, setFuture] = useState([...events])
    // const [past, setPast] = useState([])

    // const becomePast = (key) => {
    //     setPast(past => [...future[-1], ...past])
    //     setFuture(future => future.splice(-1, 1))

    //     // future = []
    //     // past = []

    //     // past = []
    //     // future = []
    //     console.log("hi")

    //     return true;
    // }



    // return (
    //     <Layout>
    //         <Future list={future} change={becomePast}></Future>
    //         <Past list={past}></Past>
    //     </Layout>
    // )
}

export default App;