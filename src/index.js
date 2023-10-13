import React from 'react'
import ReactDOM from 'react-dom'

// 2 导入组件：
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const First = () => <p>页面一的内容</p>

const App = () => (
    <Router>
    <div>
        <h1>React Router</h1>
        <ul>
            <li><Link to="/">页面一</Link></li>
            <li><Link to="/page2">页面二</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={First} />
        <Route path="/page2" component={First} />   
    </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
