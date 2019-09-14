import React from 'react';
import './App.css';

// 导入组件
// 类表达式
// import Classexopression from './components/class-expression.js';
// 类延展操作
// import Class from './components/parameter.js';
// childen属性
import Childen from './components/childen-demo.js';

class App extends React.Component {
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
				<Childen>
					<div>你好</div>
				</Childen>
			</div>
		);
	}
}

export default App;
