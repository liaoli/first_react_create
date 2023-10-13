import React from 'react'
import ReactDOM from 'react-dom'

// 2 导入组件：

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const First = () => <p>页面一的内容</p>
const socend = () => <p>页面二的内容</p>
const App = () => (
    <Router>
        <div>
            <Route exact path="/first" component={First} />
            <h1>React Router</h1>
            <Link to="/first">页面一</Link>
            <br />
            <Link to="/socend">页面二</Link>


            <Route exact path="/socend" component={socend} />
        </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
