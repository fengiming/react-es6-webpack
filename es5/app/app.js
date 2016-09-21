/**
 * Created by Administrator on 2016/8/11.
 */
/**
 * 当部署产品时，设置process.env.NODE_ENV为'production'，可以使react更快
 * 开发时可以不设置，方便开发调试
 */
//process.env.NODE_ENV = 'production' ;
//require('./css/index.less');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect ;

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={require('./js/index.js')}>
            <IndexRoute component={require('./js/home.js')}/>
            <Redirect from='index' to='/' />
        </Route>
        <Route path="/comment" component={require('./js/comment/comment.js')}></Route>
    </Router>
    , document.getElementById('webApp'));