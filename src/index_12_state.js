import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

// state的基本使用   

class App extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         count: 0
    //     }
    // }

    state = {
        count: 100
    }
    render() {
        return (
            <div>
                <h1>当前计数:{this.state.count}</h1>
                <button onClick={() => {
                    // 更新状态
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>+1</button>
            </div>
        )
    }

}
// ReactDOM.render(<App/>, document.getElementById('root')) //old

//new function
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
