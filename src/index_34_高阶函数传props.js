import React from 'react'
import ReactDOM from 'react-dom'
import './context.css'
import tiger from './image/tiger.png'

function withMouse(WrapedComponent) {
     class Mouse extends React.Component {

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
            console.log("生命周期函数：render",this.props)
            return <WrapedComponent {...this.state} {...this.props} />
        }
    
        componentDidMount() {
            window.addEventListener('mousemove', this.handleMouseMove)
        }
        componentWillUnmount() {
            window.removeEventListener('mousemove', this.handleMouseMove)
        }
    }

    Mouse.displayName = `WithMouse${getDisplayName(WrapedComponent)}`
    return Mouse
}


function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }

const Position = props => {
    return (
        <div>
            鼠标位置: {props.x}:{props.y}
            <br/>
            {props.a}
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
                <MousePosition a={1}/>
                <MouseTiger b='I am a tiger' />
            </div>
        )
    }
}


// ReactDOM.render(<App > <div> 我是子节点</div></App>, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))