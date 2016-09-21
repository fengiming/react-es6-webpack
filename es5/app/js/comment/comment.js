/**
 * Created by Administrator on 2016/8/23.
 */
var CommentForm = require('./commentForm.js');
var CommentList = require('./commentList.js');
var React = require('react');
var Menu = require('../common/header');
module.exports = React.createClass({

    getInitialState: function () {
        return {
            commentData: []
        }
    },
    render: function () {
        return (
            <div>
                <Menu />
                <div className='content-wrap'>
                    <CommentForm updateFunc={this.doUpdate}/>
                    <CommentList data={this.state.commentData}/>
                </div>
            </div>
        );
    },
    doUpdate: function (data) {
        this.setState({
            commentData: this.state.commentData.slice().concat(data)
        });
    }
});