/**
 * Created by Administrator on 2016/8/11.
 */
/**
 * 当部署产品时，设置process.env.NODE_ENV为'production'，可以使react更快
 * 开发时可以不设置，方便开发调试
 */
//process.env.NODE_ENV = 'production' ;
//require('./css/index.less');
import React from 'react' ;
import { render } from 'react-dom' ;
/* 路由 */
import {Router,Route,hashHistory,IndexRoute,Redirect} from 'react-router' ;
/* 引入组件 */
import {AppComp,HomeComp,CommentComp} from './js/components/components.js' ;


render(
    <Router history={hashHistory}>
        <Route path="/" component={AppComp}>
            <IndexRoute component={HomeComp} />
            <Redirect from='index' to='/' />
            <Route path="home" component={HomeComp}></Route>
            <Route path="comment" component={CommentComp}></Route>
        </Route>
    </Router>
    , document.getElementById('webApp'));