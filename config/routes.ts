export default [
    // 【配置式路由】
    // { path: '/', component: '@/pages/index' },
    // { path: '/user', component: '@/pages/user' },

    // 多个子路由共同使用一个模板
    // 例如：如果很多页面拥有同样的头部和底部，那么可以让这些页面使用同一个模板

    // 【第一种】 user1就是模板；/user1/two 可以使用模板，这里user1是空页面，模板（页头页脚）未指定
    // { path: '/user1', 
    //   routes:[
    //     {path:'/user1/two',component: '@/pages/user'}
    //   ]
    // },
    // 【第二种】 /user/one和two共用模板，模板指定为@/layouts/index，子组件在父组件中通过{props.children}进行展示
    // /user/one和two可以理解为子组件  /user可以理解为父组件
    // {
    //   path: '/user', 
    //   component: '@/layouts/index',
    //   routes: [
    //     { path: '/user/one', component: '@/pages/index' },
    //     { path: '/user/two', component: '@/pages/user' },
    //   ],
    // }, 

  // 【使用重定向】
  // { path: '/list', redirect: '/user/one' },


  // ---------------------------------------------------------------------------------------------------------------
  // 【@/layouts/index只是一个模板，其本身也可以展示一个页面/组件；】
  // { path: '/', 
  //   component: '@/layouts/index',
  //   routes: [
  //     { path: '/', component: '@/pages/index' },
  //     { path: '/user', component: '@/pages/user' },
  //     { path: '/user/one', component: '@/pages/user1' },
  //     { path: '/user/two', component: '@/pages/user2' },
  //     { component:'@/pages/404'}
  //   ]
  // },
  // 配置路由的高阶组件封装，如：可以用于路由级别的权限校验
  // 此处需要先在/wrappers/auth组件中做验证，通过之后才会转入one、two组件
  // {
  //   path: '/user', 
  //   component: '@/layouts/index',
  //   wrappers: [
  //     '@/wrappers/auth',
  //   ],
  //   // 路由传参——只有加上id才能匹配到one，如果路径只是/user/one则返回404
  //   // 同时也说明，one组件中也可以接收到这个参数
  //   routes: [
  //     { path: '/user/one/:id', component: '@/pages/user1',title:'用户页面1' },
  //     // 加上?之后说明这个参数是可选的，可传可不传
  //     { path: '/user/two/:id?', component: '@/pages/user2' ,title:'用户页面2'},
  //     // 只要匹配不上，就走404
  //     { component:'@/pages/404'}
  //   ],
  // }, 
  { path: '/', component: '@/pages/index' },
  { 
    path: '/user', 
    component: '@/layouts/index',
    wrappers: [
      '@/wrappers/auth',
    ],
    routes: [
      { path: '/user/one', component: '@/pages/user1',title:'用户页面1' },
      { path: '/user/two', component: '@/pages/user2' ,title:'用户页面2'},
      { component:'@/pages/404'}
    ],
  }, 
  { component:'@/pages/404'}
];