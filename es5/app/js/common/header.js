/**
 * Created by Administrator on 2016/8/29.
 */
var React = require('react') ;
var Link = require('react-router').Link ;
module.exports = React.createClass({
    render:function(){
        var menuItems = [
                {
                    path:'/',
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
}) ;