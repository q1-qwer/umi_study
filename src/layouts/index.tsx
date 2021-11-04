import React from "react";
import { Link } from 'umi'
import styles from './index.less';


// 约定式路由
// 当.umirc.ts配置文件中没有写路由时，
// 约定src/layouts/index.tsx为全局路由（加载全局共有模板），返回一个React组件，并通过props.children渲染子组件
// 自动生成路由加载pages下的模板
// 会根据文件夹自动生成嵌套路由、路由参数需要在最后加$
// 【常用配置式的路】
const Index = (props:any) => {
    return (
        <div>
            <h2 className={styles.title}>Header</h2>
            <Link to="/user/one">用户1</Link>
            <Link to="/user/two">用户2</Link>
            {props.children}
            <h2 className={styles.title}>Footer</h2>
        </div>
    )
}

export default Index;