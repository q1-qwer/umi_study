import mockjs from 'mockjs'

export default {
    '/api/index': {
        id: 1,
        name: 'Tom',
        age: 12
    },
    // GET的请求方式可以省略，其他的请求方式不可以
    'GET /api/person': {
        id: 2,
        name: 'Lili',
        age: 22
    }, 
     // 使用 mockjs 等三方库
    'GET /api/tags': mockjs.mock({
        'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
    }),
}
