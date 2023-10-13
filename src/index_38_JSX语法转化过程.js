import React from 'react'
import ReactDOM from 'react-dom'


const element = React.createElement('h1', {className: 'title'}, 'Hello, world!')

// ReactDOM.render(<App > <div> 我是子节点</div></App>, document.getElementById('root'))
ReactDOM.render(element, document.getElementById('root'))