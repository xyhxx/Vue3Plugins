<template>
  <div></div>
</template>

<script>
import { inject } from 'vue';
export default {
  name: 'App',
  setup() {
    // loadingPlugin...
    const xyhLoading = inject('xyhLoading');
    const xyhToast = inject('xyhToast');

    return { xyhLoading, xyhToast };
  },
  mounted() {
    this.xyhToast({
      type: 5,
      content: '加载失败',
      confirmText: '知道了',
      showCancel: true,
      cancelText: '取消',
      callback: res => console.log(res),
    });
    // loadingPlugin...
    // setTimeout(() => {
    //   this.xyhLoading(true, '加载中..');
    // }, 1000);
    // setTimeout(() => {
    //   this.xyhLoading(false, '加载中..');
    // }, 5000);
  },
};
</script>
