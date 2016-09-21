/**
 * Created by Administrator on 2016/8/19.
 */
var React = require('react');
module.exports = React.createClass({
    // 模板渲染主入口
    render: function () {
        return (
            <div>
                {this.props.children || ''}
            </div>
        );
    }
});