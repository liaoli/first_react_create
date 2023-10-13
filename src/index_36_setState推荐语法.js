import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {

    state = {
        count: 0
    }
    handleClick = () => {
        // setState 的更新是异步的

        //推荐语法
        this.setState((state, props) => {
            return {
                count: state.count + 1
            }
        })
        console.log("count1:", this.state.count)
        this.setState((state, props) => {
            return {
                count: state.count + 1
            }
        })
        console.log("count2:", this.state.count)
    }
    render() {
        return (
            <div>
                <h1>点击计数:{this.state.count}</h1>
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}


// ReactDOM.render(<App > <div> 我是子节点</div></App>, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))