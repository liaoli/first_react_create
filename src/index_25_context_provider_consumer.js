import React from 'react'
import ReactDOM from 'react-dom'
import './context.css'

// Context provider

const { Provider, Consumer } = React.createContext()

class App extends React.Component {
    render() {
        return (
            <Provider value={{ name: 'lily', age: 19 }}>
                <div className="app">
                    <Node />
                </div>
            </Provider>
        )
    }
}

const Node = () => {
    return (
        <div className="node">
            <SubNode />
        </div>
    )
}

const SubNode = () => {
    return (
        <div className="subnode">
            <Child />
        </div>
    )
}

const Child = () => {
    return (
        <Consumer>
            {({ name, age }) => (
                <div>
                    <h1>{name} - {age}</h1>
                </div>
            )}
        </Consumer>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))