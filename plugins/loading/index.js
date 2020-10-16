import { reactive, createApp, h} from 'vue';
import loadingBg from './img/loadingBg.png';
import loadingImg from './img/loading.gif';
import './index.css';

const plugin = {
  install(app) {
    // 初始化状态信息
    const state = reactive({ isShowLoading: false, loadingMsg: '加载中' });
    // 挂载元素
    let el = document.querySelector('#xyhLoading');
    if (!el) {
      const loadingElement = createApp({
        render() {
          return h('div', { id: 'xyhLoading', style: state.isShowLoading ? '' : 'display: none;' }, [
            h('div', { id: 'xyhLoadingInfo' }, [
              h('img', { src: loadingBg }),
              h('div', { id: 'xyhLoadingInfoContent' }, [
                h('img', { src: loadingImg }),
                h('p', state.loadingMsg),
              ]),
            ]),
          ]);
        },
      });
      const loadingParent = document.createElement('div');
      loadingParent.id = 'xyhLoadingPlugin';
      document.body.appendChild(loadingParent);
      loadingElement.mount('#xyhLoadingPlugin');
    }
    el = null;

    /**
     * 是否展示loading
     * @param {Boolean} type 是否展示
     * @param {String} msg loading文字介绍
     */
    const showLoading = (type, msg) => {
      msg = msg || '加载中';
      state.isShowLoading = type;
      state.loadingMsg = msg;
    };

    // 抛出修改方法
    app.provide('xyhLoading', showLoading);
  },
};

export default plugin;