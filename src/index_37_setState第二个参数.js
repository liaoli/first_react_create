import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {

    state = {
        count: 0
    }
    handleClick = () => {
        // setState 的更新是异步的

        //推荐语法   多次 setState方法, render只会调用一次
        this.setState((state, props) => {
            return {
                count: state.count + 1
            }
        }, () => {
            console.log("count1:", this.state.count)
        })
       
        this.setState((state, props) => {
            return {
                count: state.count + 1
            }
        }, () => {
            // 此方法在render 之后才被调用
            console.log("setState第二个方法调用了" )
            console.log("count2:", this.state.count)
            console.log(document.getElementById('title').innerText)

        })
        console.log("count3:", this.state.count)
    }
    render() {
        console.log("render")
        return (
            <div>
                <h1 id='title'>点击计数:{this.state.count}</h1>
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}


// ReactDOM.render(<App > <div> 我是子节点</div></App>, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))