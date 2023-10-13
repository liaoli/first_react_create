import React from 'react'
import ReactDOM from 'react-dom'
import './context.css'
import tiger from './image/tiger.png'
import PropTypes from 'prop-types'

class Mouse extends React.Component {

    static propTypes = {
        children: PropTypes.func.isRequired
    }
    state = {
        x: 0,
        y: 0
    }
    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render() {
        return this.props.children(this.state)
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove)
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove)
    }
}


class App extends React.Component {
    render() {
        console.log("生命周期函数：render")
        return (
            <div>
                <Mouse>
                    {mouse => {
                        return (
                            <div>
                                鼠标位置: {mouse.x}:{mouse.y}
                            </div>
                        )
                    }}
                </Mouse>

                <Mouse>
                    {mouse => {
                        return (
                            <div>
                                <img src={tiger} alt=""
                                    style={{
                                        left: mouse.x - 64,
                                        top: mouse.y - 64,
                                        position: 'absolute'
                                    }}
                                />
                            </div>
                        )
                    }}
                </Mouse>
                {/* <Mouse/>  b报错*/} 
            </div>
        )
    }
}



// ReactDOM.render(<App > <div> 我是子节点</div></App>, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))