import * as React from "react"
import { Router, Link } from "@reach/router"

import Layout from "../components/Layout.jsx"
import Event from "../components/Event.jsx"
import Future from "../components/Future.jsx"
import Past from "../components/Past.jsx"

const {useState, useEffect} = React

// events
const events = []

// Event 1

let date = new Date(2021, 4, 1, 8, 0)
let temp = {date: date.getTime(), name: "testing 1"}
events.push(temp)

// Event 2
date = new Date(2021, 4, 1, 9, 0)
temp = {date: date.getTime(), name: "testing 2"}
events.push(temp)

// Event 0
date = new Date(2021, 3, 1, 8, 0)
temp = {date: date.getTime(), name: "testing 3"}
events.push(temp)

date = new Date(2021, 3, 2, 8, 0)
temp = {date: date.getTime(), name: "testing 4"}
events.push(temp)

events.sort(event => event.date).reverse()

const App = () => {

    let [future, setFuture] = useState([...events])
    let [past, setPast] = useState([])

    async function becomePast(key) {
        setPast(past => [...future[key], ...past])
        setFuture(future => future.splice(key, 1))

        // past = []
        // future = []
        console.log("hi")

        return true;
    }

    return (
        <Layout>
            <Future list={future} change={becomePast}></Future>
            <Past list={past}></Past>
        </Layout>
    )
}

export default App;