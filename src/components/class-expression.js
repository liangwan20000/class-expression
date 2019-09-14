/**
*	类表达式
*/
// 引入React核心文件
import React from 'react';
// 创建类组件
class Person {
	// 调用构造函数，并接收参数
	constructor (name) {
		// 设置属性
		this.name = name
	}
	// 当前类组件导出的内容由render提供
	render () {
		return (
			<div>{ this.name }</div>
		)
	}
}

/**
*	导出类组件
*/
export default Person;