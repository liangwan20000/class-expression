/**
*	点标记语法
*/
// 引入React核心文件
import React from 'react';
// 注意表达式不会被提升，所以必须在对象之前定义
let Header = class extends React.Component {
	// 当前类组件导出的内容由render提供
	render () {
		return (
			<h1>头部</h1>
		)
	}
};
let Content = class extends React.Component {
	// 当前类组件导出的内容由render提供
	render () {
		return (
			<h1>内容区域</h1>
		)
	}
};
let Footer = class extends React.Component {
	// 当前类组件导出的内容由render提供
	render () {
		return (
			<h1>底部</h1>
		)
	}
}
// 创建页面对象Html
let Html = {
	Header: Header,
	Content: Content,
	Footer: Footer
};

/**
*	导出类组件
*/
export default Html;
