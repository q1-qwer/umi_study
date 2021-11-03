import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
    nodeModulesTransform: {
      type: 'none',
    },
    title:'UmiJS',
    theme:{
      "primary-color":"#1DA57A",
    },
    routes: routes,
    fastRefresh: {},
  });
  