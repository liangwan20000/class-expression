import React from 'react';
import './App.css';

// 导入组件
// 类表达式
// import Classexopression from './components/class-expression.js';
// 类延展操作
// import Class from './components/parameter.js';
// childen属性
// import Childen from './components/childen-demo.js';
// 封装模态窗口
// import ModalWindow from './components/Modal-Window.js';
// 重构图书管理系统
import Formcase from './components/form-case.js';

class App extends React.Component {
	// 构造函数
	// constructor (props) {
		// 调用父类构造函数
		// super(props);
		// 在state中设置状态位，控制模态窗口
		// this.state = {
		// 	switch: false
		// };
		// 改变事件this指向
		// this.handleModal = this.handleModal.bind(this);
		// this.PropsFn = this.PropsFn.bind(this);
	// }
	// // 点击弹出模态窗口
	// handleModal = function () {
	// 	// 改变状态必须使用setState
	// 	this.setState({
	// 		switch: true
	// 	})
	// }
	// // 组件传值专用函数
	// PropsFn = function (state) {
	// 	this.setState({
	// 		switch: state
	// 	})
	// }
	render () {
		// let info = {
		// 	name: '张三',
		// 	age: 20,
		// 	gender: '男',
		// 	photo: 120
		// };
		// // 这样可以取出不需要的数据，只传递需要的数据
		// let { name, ...other } = info;
		return (
			<div>
				{/*模态窗口*/}
				{/*<button onClick={ this.handleModal }>点击</button>
				{this.state.switch && <ModalWindow method={ this.PropsFn } title="图书列表">
					<div>你好</div>
				</ModalWindow>}*/}
				{/*图书管理系统重构*/}
				<Formcase></Formcase>
			</div>
		);
	}
}

export default App;
