/**
 * Created by Administrator on 2016/9/21.
 */

/* 主组件 */
import AppComp from './common/appComp.js' ;


/* 公共模块 begin */

import MenuComp from './common/menuComp.js' ; // 菜单
import HomeComp from './common/homeComp.js' ; // 首页

/* 公共模块 end */

/* 评论模块 begin */
import CommentComp from './comment/commentComp.js' ; // 评论
import CommentFormComp from './comment/commentFormComp.js' ; // 评论表单
import CommentListComp from './comment/commentListComp.js' ; // 评论列表

/* 评论模块 end */


/* 导出模块 */
export  {
    AppComp,
    HomeComp,
    MenuComp,
    /* 评论模块 */
    CommentComp,
    CommentFormComp,
    CommentListComp
} ;