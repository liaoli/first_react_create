import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.PureComponent {
    state = {
        obj: {
            count: 0
        }
    }
// shallo compare
    handleClick = () => {
        // 正确写法
        this.setState({
            obj: {...this.setState.obj,number:Math.floor(Math.random() * 3)}
        })

        //shallo compare 比的是对象的引用 错误写法
        // const newObj = this.state.obj
        // newObj.count = this.state.obj.count + 1
        // this.setState({
        //     obj: newObj
        // })
    }

    render() {
        console.log("parent：render")
        return (
            <div>
                <h1>父组件:{this.state.obj.count}</h1>
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))
