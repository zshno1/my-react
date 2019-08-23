import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

// function name(user){
//   return `姓名:${user.name}年龄:${user.age}`
// }
// const name = 'Worad';
// const user = {
//   name:'zsh',
//   age:18
// };
// const element = <div>{name(user)}</div>
// 为了便于阅读，我们会将 JSX 拆分为多行。同时，我们建议将内容包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到自动插入分号陷阱。
// const element = (
//   <div>
//    <p>{name(user)}</p>
//   </div>
// )
// JSX 表示对象
// const element = React.createElement(
//   'div',
//   {className:'box'},
//   'hello world!'
// );

// 函数组件与class组件
function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}
// es6语法
// class Welcome extends React.Component{
//   render(){
//     return <h1>Hello,{this.props.name}</h1>
//   }
// }
const element = <Welcome name='Sara'/>
// 1、我们调用 ReactDOM.render() 函数，并传入 <Welcome name="Sara" /> 作为参数。
// 2、React 调用 Welcome 组件，并将 {name: 'Sara'} 作为 props 传入。
// 3、Welcome 组件将 <h1>Hello, Sara</h1> 元素作为返回值。
// 4、React DOM 将 DOM 高效地更新为 <h1>Hello, Sara</h1>。
// 注意： 组件名称必须以大写字母开头。
ReactDOM.render(
  // <App />,
  element,
  document.getElementById('root')
);
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);
