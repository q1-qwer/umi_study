import { Redirect } from 'umi'


// 在这个组件中可以做一些等级、权限的验证

export default (props:any) => {
    // 如果为true 则是登录状态
  const isLogin = true
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/" />;
  }
}