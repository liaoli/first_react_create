import React from 'react'
import ReactDOM from 'react-dom'

/* 
  评论列表案例

  comments: [
    { id: 1, name: 'jack', content: '沙发！！！' },
    { id: 2, name: 'rose', content: '板凳~' },
    { id: 3, name: 'tom', content: '楼主好人' }
  ]
*/

import './index.css'

class App extends React.Component {
    // 初始化状态
    state = {
        user: '',
        content: '',
        comments: [
        ]
    }

    contentList() {
        const { comments } = this.state
        if (comments.length === 0) {
            return <div className="no-comment">暂无评论，快去评论吧~</div>
        }
        return (
            <ul>
                {comments.map(item => (
                    <li key={item.id}>
                        <h3>评论人：{item.name}</h3>
                        <p>评论内容：{item.content}</p>
                    </li>
                ))}
            </ul>
        ) 
    }

    handleForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addComment = () => {
        const { user, content } = this.state
        if (!user || !content) {
            alert('请输入评论人和评论内容')
            return
        }
        this.setState({
            comments: [
                ...this.state.comments,
                { id: this.state.comments.length + 1, name: user, content: content }
            ],
            user: '',
            content: ''
        })
    }

    render() {
        return (
            <div className="app">
                <div>
                    <input name="user" className="user" value={this.state.user} type="text" placeholder="请输入评论人" onChange={this.handleForm}/>
                    <br />
                    <textarea
                        name="content"
                        className="content"
                        value={this.state.content}
                        cols="30"
                        rows="10"
                        placeholder="请输入评论内容"
                        onChange={this.handleForm}
                    />
                    <br />
                    <button onClick={this.addComment} >发表评论</button>
                </div>

                {this.contentList()}

                {/* {(this.state.comments.length === 0) ?
                    <div className="no-comment">暂无评论，快去评论吧~</div>
                    :
                    <ul>
                        {this.state.comments.map(item => (
                            <li key={item.id}>
                                <h3>评论人：{item.name}</h3>
                                <p>评论内容：{item.content}</p>
                            </li>
                        ))}
                    </ul>
                } */}

            </div>
        )
    }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
