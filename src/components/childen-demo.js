/**
*	类组件中props的childen属性
*/
// 引入React核心文件
import React from 'react';
// 创建类组件
let Childen = class extends React.Component {
	// 构造函数
	// constructor (props) {
	// 	// 调用父类构造函数
	// 	super(props);
	// }
	// render方法提供渲染的模板
	render () {
		// 解构出需要的值
		let { children } = this.props;
		return (
			<div>
				{ children }
			</div>
		)
	}
}
// 导出类组件
export default Childen;
