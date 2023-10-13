import React from 'react'
import ReactDOM from 'react-dom'
import './context.css'
import tiger from './image/tiger.png'

function withMouse(WrapedComponent) {
    return class extends React.Component {
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
            return <WrapedComponent {...this.state} />
        }
    
        componentDidMount() {
            window.addEventListener('mousemove', this.handleMouseMove)
        }
        componentWillUnmount() {
            window.removeEventListener('mousemove', this.handleMouseMove)
        }
    }
}



const Position = props => {
    return (
        <div>
            鼠标位置: {props.x}:{props.y}
        </div>
    )
}

const Tiger = props => {
    return (
        <img src={tiger} alt=""
            style={{
                left: props.x - 64,
                top: props.y - 64,
                position: 'absolute'
            }}
        />
    )
}

const MousePosition = withMouse(Position)
const MouseTiger = withMouse(Tiger)


class App extends React.Component {
    render() {
        console.log("生命周期函数：render")
        return (
            <div>
                <MousePosition />
                <MouseTiger />
            </div>
        )
    }
}


// ReactDOM.render(<App > <div> 我是子节点</div></App>, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))