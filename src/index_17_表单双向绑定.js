import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

// state的基本使用

class App extends React.Component {
    state = {
        txt: 'hello'
    }

    handleChange = (e) => {
        this.setState({
            txt: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.txt} onChange={this.handleChange}/>
            </div>
        )
    }

}
// ReactDOM.render(<App/>, document.getElementById('root')) //old

//new function
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
