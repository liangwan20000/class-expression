/**
*	表格案例
*/
/**
*	引入React核心文件
*/
import React from 'react';
/**
*	引入样式文件
*/
import '../static/formcase.css';
// 引入axios
import axios from 'axios';
// 设置axios基准路径
axios.defaults.baseURL = 'http://localhost:3000';
// 设置响应拦截器
axios.interceptors.response.use(function (res) {
	// res是返回的包装后的对象
	return res.data
});
/**
*	定义组件
*/
class FormCase extends React.Component {
	// 调用父类构造函数，并把值传递过去
	constructor (props) {
		// 构造函数中第一行代码必须是super
		super(props);
		// this前必须加super
		// state是组件的私有状态，并且是响应式的；函数组件的私有状态不是响应式的，所以说函数组件没有私有状态
		this.state = {
			// 输入框ID
			bookId: '',
			// 输入框名称
			bookName: '',
			// 保存数据
			bookList: [],
			// 状态位
			flag: true
		};
		// 改变方法this指向
		this.numberBook = this.numberBook.bind(this);
		this.nameBook = this.nameBook.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deletebook = this.deletebook.bind(this);
		this.modifybook = this.modifybook.bind(this);
	}

	// 组件完成挂载之后
	componentDidMount () {
		// 调用接口请求数据
		this.loadData();
	}
	// 获取列表数据
	loadData = async () => {
		let data = await axios.get('/books');
		this.setState({
			bookList: data
		})
	}
	
	// 实时更新图书编号
	numberBook = function (event) {
		// 改变状态必须使用setState
		this.setState({
			bookId: event.target.value
		})
	}

	// 实时更新图书名称
	nameBook = function (event) {
		// 改变状态必须调用setState
		this.setState({
			bookName: event.target.value
		})
	}

	// 点击时添加图书到列表
	handleSubmit = async function (event) {
		// 输入框非空验证
		if (!this.state.bookName) { return alert('请填写图书名称') };
		// 名称排重验证
		let flag = await axios.get('/books/book' + this.state.bookName);
		// 判断
		if (flag.status === 1) {
			return alert('图书存在');
		}
		// 发送请求，提交数据
		let res = await axios.post('/books', {
			name: this.state.bookName
		});
		// 判断返回结果是否成功
		if (res.status === 200) {
			// 成功重新加载数据
			this.loadData();
			// 质空输入框
			this.setState({
				bookId: '',
				bookName: ''
			})
		}
	}
	
	// 点击删除图书
	deletebook = async function (id, event) {
		// 阻止默认行为
		event.preventDefault();
		// 发送请求，提交数据
		let res = await axios.delete('/books/' + id);
		// 判断返回结果是否成功
		if (res.status === 200) {
			// 删除成功
			this.loadData();
		}
	}
	
	// 点击编辑图书
	changebook = async function (id, event) {
		// 阻止默认行为
		event.preventDefault();
		// 发送请求，提交数据
		let res = await axios.get('/books/' + id);
		// 点击编辑用图书信息填充输入框
		this.setState({
			bookId: res.id,
			bookName: res.name,
			flag: false
		})
	}

	// 点击修改图书
	modifybook = async function (event) {
		// 输入框非空验证
		if (!this.state.bookName) { return alert('请填写图书名称') };
		// 名称排重验证
		let flag = await axios.get('/books/book/' + this.state.bookName);
		// 判断
		if (flag.status === 1) {
			return alert('图书存在');
		}
		// 提交数据
		let res = await axios.put('/books/' + this.state.bookId, {
			name: this.state.bookName
		});
		// 判断返回结果是否成功
		if (res.status === 200) {
			// 成功
			this.loadData();
			// 重新赋值
			this.setState({
				flag: true,
				bookId: '',
				bookName: ''
			})
		}
	}

	// 类组件的模板通过render方法提供
	// render方法是固定写法，提供要渲染的模板
	render () {
		// 根据数据动态生成表格
		let trlist = this.state.bookList.map((item) => {
			return (
				<tr key={ item.id }>
					<td>{ item.id }</td>
					<td>{ item.name }</td>
					<td>
						<a href="http://www.baidu.com" onClick={ this.changebook.bind(this, item.id) }>编辑</a>
						<a href="http://www.baidu.com" onClick={ this.deletebook.bind(this, item.id) }>删除</a>
					</td>
				</tr>
			)
		})
		// 返回jsx元素
		return (
			<div>
				<table>
					<caption>图书管理系统</caption>
					<caption id="caption">
						{/*<label>编号：</label>
						<input
							readOnly={ !this.state.flag }
							type="text"
							value={ this.state.bookId }
							onChange={ this.numberBook }
							id="number"/>*/}
						<label>名称：</label>
						<input
							type="text"
							value={ this.state.bookName }
							onChange={ this.nameBook }
							id="name"/>
						<button onClick={ this.state.flag === false ? this.modifybook : this.handleSubmit }>提交</button>
					</caption>
					<thead>
						<tr>
							<th>编号</th>
							<th>名称</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						{ this.state.bookList.length === 0 && <tr><td colSpan="3">正在加载中...</td></tr> }
						{ trlist }
					</tbody>
				</table>
			</div>
		)
	}
}
/**
*	导出类组件
*/
export default FormCase;
