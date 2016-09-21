/**
 * Created by Administrator on 2016/8/23.
 */
import React,{Component} from 'react' ;
import {CommentFormComp,CommentListComp,MenuComp} from '../components.js' ;

export default class CommentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentData: []
        };
        ['doUpdate'].forEach((method)=>{
            this[method] = this[method].bind(this) ;
        }) ;
    }

    render() {
        return (
            <div>
                <MenuComp />
                <div className='content-wrap'>
                    <CommentFormComp updateFunc={this.doUpdate}/>
                    <CommentListComp data={this.state.commentData}/>
                </div>
            </div>
        );
    }

    doUpdate(data) {
        this.setState({
            commentData: this.state.commentData.slice().concat(data)
        });
    }
}