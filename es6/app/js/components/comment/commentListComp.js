/**
 * Created by Administrator on 2016/8/23.
 */
import React,{Component} from 'react' ;
export default class CommentListComp extends Component{

    render(){
        // 若显示正常的innerHTML，可以用如下模式：
        // <i>{item.author}</i> -say- :<span dangerouslySetInnerHTML={{__html:item.commentTxt}}></span>

        let commentList = (this.props.data || []).map((item)=>{
            return (
                <li key={item.author}>
                    <i>{item.author}</i> -say- :<span>{item.commentTxt}</span>
                </li>
            ) ;
        });
        return (
            <div>
                <h3>评论列表</h3>
                <ul>{commentList}</ul>
            </div>
        ) ;
    }
}