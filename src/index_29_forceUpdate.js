import React from 'react'
import ReactDOM from 'react-dom'
import './context.css'
import PropTypes from 'prop-types'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log("生命周期函数：constructor")
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("生命周期函数：getDerivedStateFromProps")
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("生命周期函数：shouldComponentUpdate")
        return true
    }

    //已经渲染完成了
    componentDidMount() {
        console.log("生命周期函数：componentDidMount")
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("生命周期函数：getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("生命周期函数：componentDidUpdate")
    }


    componentWillUnmount() {
        console.log("生命周期函数：componentWillUnmount")
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
        // this.forceUpdate()
    }
    

    render() {
        console.log("生命周期函数：render")
        return (
            <div>
                <h1 className="title">
                    点击次数：{this.state.count}
                </h1>
                <button onClick={this.handleClick}>+1</button>
                {this.props.children}
            </div>
        )
    }
}

class Hello extends React.Component {
    state = {
        flag: true  
    }

    handleClick = () => {
        this.forceUpdate()
    }
    render() {
        return (
            <div>
                <h1 className="title">
                    Hello, I'm a Class component!
                </h1>
              { this.state.flag ? <App/> : (<div>{this.state.flag}不显示app组件</div>)}
              <button onClick={this.handleClick}>forceUpdate</button>
            </div>
        )
    }
}

// ReactDOM.render(<App > <div> 我是子节点</div></App>, document.getElementById('root'))
ReactDOM.render(<Hello />, document.getElementById('root'))