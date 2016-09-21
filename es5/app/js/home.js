var React = require('react');
var Menu = require('./common/header') ;
module.exports = React.createClass({
    /* 组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求 */
    propTypes: {
        // 要求name是字符串并且必填
        name: React.PropTypes.string.isRequired
    },
    /*
    * props 是不可变的：它们从父组件传递过来，“属于”父组件。
    * getDefaultProps 方法可以用来设置组件属性的默认值
    * */
    getDefaultProps: function () {
        return {
            items:[
                {item:'1',content:'1月'},
                {item:'2',content:'2月'},
                {item:'3',content:'3月'},
                {item:'4',content:'4月'},
                {item:'5',content:'5月'},
                {item:'6',content:'6月'},
                {item:'7',content:'7月'}
            ],
            name: ''
        };
    },
    /*
     * this.state 是组件私有的，可以通过调用 this.setState() 来改变它。当 state 更新之后，组件就会重新渲染自己。
     * getInitialState() 在组件的生命周期中仅执行一次，用于设置组件的初始化 state 。
     * */
    getInitialState: function () {
        return {
            name: 'World!'
        };
    },
    // 模板渲染主入口
    render: function () {
        var monthNodes = this.props.items.map(function(kitem){
            return (
                <li key={kitem.item}>{kitem.item}:{kitem.content}</li>
            ) ;
        });
        return (
            <div>
                <Menu />
                <div className='content-wrap'>
                    <h1 className='p'>Hello {this.state.name}</h1>
                    <p ref='myNode'>这是一段文字</p>
                    <ul>
                        {monthNodes}
                    </ul>
                </div>
            </div>
        );
    },
    // 真实的dom已插入到页面中，可以进行dom相关操作
    componentDidMount: function () {

    }
});