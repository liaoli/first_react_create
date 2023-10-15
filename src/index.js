import React from 'react'
import ReactDOM from 'react-dom'

// 2 导入组件：

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Login extends React.Component {

    handleLogin = () => {
        // alert('登录成功')
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <input type="text" placeholder='用户名'/>
                <input type="password" placeholder='密码'/>
                <button onClick={this.handleLogin}>登录</button>
            </div>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>首页</h1>
                <button onClick={() => this.props.history.go(-1)}>返回到登录页</button>
            </div>
        )
    }
}
const App = () => (
    <Router>
        <div>
            {/* 指定路由出口 */}
            <h1>React Router 编程样式导航</h1>
            <Link to="/login">页面一</Link>
            <br />
            {/* 指定路由入口 */}
            <Link to="/home">页面二</Link>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} /> 
        </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
