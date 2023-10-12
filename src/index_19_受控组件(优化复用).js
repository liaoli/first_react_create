import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

// state的基本使用

class App extends React.Component {
    state = {
        txt: 'hello',
        content: '',
        city: 'sh',
        isChecked: false
    }

    handleChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    // handleContent = (e) => {
    //     this.setState({
    //         content: e.target.value
    //     })
    // }

    // handleSelect = (e) => {
    //     this.setState({
    //         city: e.target.value
    //     })
    // }

    // handleCheck = (e) => {
    //     this.setState({
    //         isChecked: e.target.checked
    //     })
    // }

    render() {
        return (
            <div>
                {/** 文本框 */}
                <input type="text" name="txt" value={this.state.txt} onChange={this.handleChange} />
                <br />
                {/** 富文本框 */}
                <textarea name="content" value={this.state.content} onChange={this.handleChange} />
                <br />
                {/** 下拉框 */}
                <select name="city" value={this.state.city} onChange={this.handleChange}>
                    <option value="sh">上海</option>
                    <option value="bj">北京</option>
                    <option value="sz">深圳</option>
                </select>
                <br />
                {/** 复选框 */}
                <input name="isChecked" type="checkbox" checked={this.state.isChecked} onChange={this.handleChange} />
            
            </div>
        )
    }

}
// ReactDOM.render(<App/>, document.getElementById('root')) //old

//new function
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
