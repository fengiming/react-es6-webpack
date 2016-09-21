/**
 * Created by Administrator on 2016/8/19.
 */
import React,{Component} from 'react' ;
export default class AppComp extends Component{
    render(){
        return (
            <div>
                {this.props.children || ''}
            </div>
        );
    }
}
