/**
*	参数延展操作
*/
// 引入React核心文件
import React from 'react';
// 创建类组件
class Class extends React.Component {
	// 构造函数
	constructor (props) {
		// 调用父类构造函数
		super(props);
	}

	render () {
		let { age, photo, name } = this.props;
		return (
			<div>{ age }{ photo }{ name }</div>
		)
	}
}
export default Class;
