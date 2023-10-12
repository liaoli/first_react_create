import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

// state的基本使用

class App extends React.Component {

    constructor() {
        super()
        this.txtRef = React.createRef()
    }

    handleClick = (e) => {
        console.log("输入的内容为：",this.txtRef.current.value)
    }

   

    render() {
        return (
            <div>
                {/** 文本框 */}
                <input type="text" name="txt" ref={this.txtRef}/>
                <br /> 
                <button onClick={this.handleClick}>get input content</button>
            </div>
        )
    }

}
// ReactDOM.render(<App/>, document.getElementById('root')) //old

//new function
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
