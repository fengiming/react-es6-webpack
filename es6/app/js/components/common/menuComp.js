/**
 * Created by Administrator on 2016/8/29.
 */
import React,{Component} from 'react' ;
import {Link} from 'react-router' ;
export default class MenuComp extends Component{
    render(){
        let menuItems = [
                {
                    path:'/home',
                    name:'首页'
                },
                {
                    path:'/comment',
                    name:'评论'
                }
            ],
            menuNodes = menuItems.map(function(item){
                return <li key={item.path}><Link to={item.path} activeClassName='menu-active'>{item.name}</Link></li>
            }) ;
        return (
            <div className='header-wrap'>
                <ul className='menu-list'>
                    {menuNodes}
                </ul>
            </div>

        ) ;
    }
}