/**
*	封装组件--模态窗口
*/
// 引入React核心文件
import React from 'react';
// 引入样式文件
import '../static/ModalWindow.css';
// 创建类组件
let ModalWindow = class extends React.Component {
	// 组件的构造函数
	constructor (props) {
		// 调用父组件的构造函数
		super(props);
		// 设置私有状态
		this.state = {
			switch: true
		}
		// 改变方法内的this
		this.handleModal = this.handleModal.bind(this);
	}
	// 点击关闭模态窗口
	handleModal = function () {
		this.props.method(false);
	}
	// render方法提供渲染的模板
	render () {
		let display = {
			block: {
				display: 'block'
			},
			none: {
				display: 'none'
			}
		}
		// 解构出children
		let { children, title } = this.props;
		return (
			<div>
				<div className="modal-window">
					<div className="modal-content">
						<div className="modal-title">
							<span>{ title }</span>
							<span onClick={ this.handleModal }>x</span>
						</div>
						{ children }
					</div>
				</div>
			</div>
		)
	}
}
/**
*	导出类组件
*/
export default ModalWindow;
