import React from "react"
import { Router, Link } from "@reach/router"

import Layout from "../components/Layout.jsx"
import Timer from "../components/Timer.jsx"
import events from "../../events.js"
import "../components/Container.css"

events = events.sort((e1, e2) => (e1.date - e2.date))
events = events.map((element, index) => ({...element, id: index, done: false}))

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            e: [...events]
        }
    }

    end = (id) => {
        this.setState(old => {
            old.e[id].done = true
            return old
        })
    }

    updateDiv(x) {
        let scroll_pos = x.scrollLeft

        let divWidth = x.scrollWidth - x.clientWidth;
    
        if (scroll_pos == 0) {
            x.classList.remove("not-at-left")
        }
    
        if (scroll_pos > 0) {
            x.classList.add("not-at-left")
        }
    
        if (scroll_pos < divWidth) {
            x.classList.add("not-at-right")
        }
    
        if (scroll_pos == divWidth) {
            x.classList.remove("not-at-right")
        }
    }

    componentDidUpdate() {
        const objs = document.querySelectorAll(".scroll-wrapper");
        for(const i of objs) {
            i = i.childNodes[0];
            this.updateDiv(i)
        }
    }

    componentDidMount() {
        const objs = document.querySelectorAll(".scroll-wrapper");
        for(const i of objs) {
            i = i.childNodes[0];
            this.updateDiv(i)
        }
    }

    render() {
        const {e} = this.state
        const future = e.filter(z => !z.done)
        const past = e.filter(f => f.done)
        const current = future[0]

        return (<Layout>
            <div className="app">
                <section className="future">
                    <h2>Future</h2>
                    <div className="scroll-wrapper">
                        <div className="timerContainer" onload={(x) => this.updateDiv(x)} onScroll={(x) => this.updateDiv(x.target)}>
                            {future.slice(1).map(event => <Timer key={event.id} type={"future"} event={event} onEnd={this.end}></Timer>)}
                        </div>
                    </div>
                    {current ? <Timer key={current.id} type={"current"} event={current} onEnd={this.end}></Timer> : <></>}
                </section>

                <section className="past">
                    <h2>Past</h2>
                    <div className="scroll-wrapper">
                        <div className="timerContainer" onload={(x) => this.updateDiv(x)} onScroll={(x) => this.updateDiv(x.target)}>
                            {past.map(event => <Timer key={event.id} type={"past"} event={event} onEnd={this.end}></Timer>)}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>)
    }
}

export default App;