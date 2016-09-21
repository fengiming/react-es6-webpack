/**
 * Created by Administrator on 2016/8/23.
 */
var React = require('react');
var Modal = require('react-modal');
/* 模态框样式：overlay是蒙层样式，content是内容样式 */
var modalStyle = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.3)'
    },
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        transform             : 'translate(-50%, -50%)'
    }
};
module.exports = React.createClass({
    getInitialState:function(){
        return {
            modalIsOpen:false,
            authorName:'',
            commentTxt:''
        }
    },
    render: function () {
        return (
            <form>
                <h3>添加评论</h3>
                <div className='form-row'>
                    <input type='text' ref='author' placeholder='请输入姓名' onKeyUp={this.validateName} />
                </div>
                <div className='form-row'>
                    <textarea className='comment-txt' type='text' ref='commentTxt' placeholder='请输入评论内容'></textarea>
                </div>
                <div className='form-row'>
                    <p>多选</p>
                    <select defaultValue={["B",'A']} multiple={true}>
                        <option value="A">Apple</option>
                        <option value="B">Banana</option>
                        <option value="C">Cranberry</option>
                    </select>
                    <p>单选</p>
                    <select defaultValue='A'>
                        <option value="A">Apple</option>
                        <option value="B">Banana</option>
                        <option value="C">Cranberry</option>
                    </select>
                </div>
                <div className='form-row'>
                    <input type='checkbox' ref='sex' value='0' defaultChecked />男
                    <input type='checkbox' ref='sex' value='1'/>女
                </div>
                <div className='form-row'>
                    <input type='button' value='提交评论' onClick={this.doSubmitComment}/>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    shouldCloseOnOverlayClick={false}
                    style={modalStyle}>
                    <div className='common-modal'>
                        <button onClick={this.closeModal} className='close'>X</button>
                        我是一个模态框
                    </div>
                </Modal>
            </form>
        );
    },
    // 提交表单
    doSubmitComment: function () {
        var author = (this.refs.author.value || '').trim();
        var commentTxt = (this.refs.commentTxt.value || '').trim();
        var self = this;
        if (author && commentTxt) {
            // 调用父组件的方法，即父子通信
            this.props.updateFunc({author: author, commentTxt: commentTxt});
            // 清空文本框的值
            this.refs.author.value = this.refs.commentTxt.value = '';
            // 弹框提示
            this.setState({modalIsOpen:true});
        }
    },
    // 用户输入检查
    validateName:function(){
        var author = (this.refs.author.value || '').trim();
        var rule = /\W/g ;
        author && (this.refs.author.value = author.replace(rule,'')) ;
    },
    // 关闭模态框
    closeModal:function(){
        this.setState({modalIsOpen:false});
    }

});