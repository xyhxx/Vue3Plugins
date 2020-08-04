# 基于Vue3的loading和toast插件

> css 动画样式使用的 vivify 动画组件中的部分动画

##  loadingPlugin

> 在 main.js 进行引入并初始化

```javascript

import xyhLoading from './plugins/loading';

createApp(App).use(xyhLoading).mount('#app');
```

> xyhLoading(type, msg);

| Param |  Type     | Description       |
| :---- | :----:    | :---------------  |
| type  | Boolean   | 是否展示            |
| msg   | String    | loading 提示语句    |

>  示例

```javascript

import { inject } from 'vue';
export default {
  name: 'App',
  setup() {
    // 继承loading方法
    const xyhLoading = inject('xyhLoading');
    // 抛出loading方法
    return { xyhLoading };
  },
  methods: {
    // 展示loading的事件
    someEventToShowLoading(){
      this.showLoading(true, '加载中');
    },
    // 隐藏loadind的事件
    someEventToHideLoading(){
      this.showLoading(false);
    },
  },
};

```

##  toastPlugin

> 在 main.js 进行引入并初始化

```javascript
import xyhToast from './plugins/toast';

createApp(App).use(xyhToast, {theme: '#00695c', color: '#fff'}).mount('#app');
```

> options

| Param |  Type     | Description       |
| :---- | :----:    | :---------------  |
| theme  | String   | 确认按钮背景色            |
| color   | String    | 文字颜色    |


> xyhToast(options)

| Param |  Type     | Description       |
| :---- | :----:    | :---------------  |
| duration  | Number   | 展示事件，字段为0时展示按钮组            |
| type   | Number    | 0：成功，1：警告，2：错误    |
| title | String | 标题 |
| content | String | 内容 |
| confirmText | String | 确认按钮内容 |
| showCancel | Boolean | 展示取消按钮 |
| cancelText | String | 取消按钮内容 |
| callback[res] | Function[Boolean] | 回调方法，返回点击按钮，确认按钮返回true，取消按钮返回false

> 示例

```javascript

import { inject } from 'vue';
export default {
  name: 'App',
  setup() {
    // 继承xyhToast方法
    const xyhToast = inject('xyhToast');
    // 抛出xyhToast方法
    return { xyhToast };
  },
  methods: {
    // 展示toast的事件
    someEventToShowToast(){
      this.xyhToast({
        type: 1,
        content: '您确定要删除当前元素吗？',
        confirmText: '确定',
        showCancel: true,
        cancelText: '取消',
        callback: res => console.log(res),
      });
    },
  },
};

```