import React from 'react';
import './App.css';

// 导入组件
// 类表达式
import Classexopression from './components/class-expression.js';

class App extends React.Component {
	// 构造函数
	constructor (props) {
		// 调用父类构造函数
		super(props)
		this.state = {
			flag: false
		}
	}
	componentDidMount () {
		this.setState({
			flag: true
		})
	}
	render () {
		return (
			<div>
				<Classexopression.Header></Classexopression.Header>
				<Classexopression.Content></Classexopression.Content>
				<Classexopression.Footer></Classexopression.Footer>
			</div>
		);
	}
}

export default App;
