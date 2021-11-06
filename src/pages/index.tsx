import styles from './index.less';
import { DatePicker, Button } from 'antd';
import { useEffect } from 'react'
import { history ,request } from 'umi';

export default function IndexPage(props:any) {
  console.log(props);
  // 命令式导航————2s之后跳转到one页面
  useEffect(()=>{
    // setTimeout(()=>{
    //   history.push('/user/one')
    // },2000)
  },[])
  // const getData = () => {
  //   // 请求数据 ,umijs自己封装了request请求
  //   // 【使用then的方式——异步】
  //   request('/api/index').then(res => {
  //     console.log(res);
      
  //   })
  // }
  const getData = async () => {
    // 【使用同步的方式获取数据】
    const data = await request('api/tags')
    console.log(data);
  }
  return (
    <div>
      <h1 className={styles.title}>Page index 首页根目录</h1>
      <Button onClick={getData}>点我获取数据</Button>
      <DatePicker />
    </div>
  );
}
