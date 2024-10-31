<template>
  <div id="components-layout-demo-side">
    <a-layout style="min-height: 100vh; background: white" theme="light">
      <a-layout-sider
        v-if="screens.md"
        v-model:collapsed="collapsed"
        collapsible
        style="background: white"
        theme="light"
      >
        <div class="logo">
          <img
            src="https://www.prelinker.com/b/assets/unlogged/logo.png"
            alt="Vite Logo"
          />
        </div>
        <Menu />
      </a-layout-sider>
      <a-drawer v-else :width="500" title="Basic Drawer" placement="left" :open="open" @close="onClose">
        <template #extra>
          <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
          <a-button type="primary" @click="onClose">Submit</a-button>
        </template>
        <Menu />
      </a-drawer>
      <a-layout>
        <a-layout-header
          style="
            background: #fff;
            padding: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 15px;
          "
        >
          <a-button v-if="!screens.md" type="primary" @click="showDrawer">Open</a-button>
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <div
            :style="{
              padding: '24px',
              background: '#eee',
              minHeight: '360px',
              marginTop: '24px',
            }"
          >
            <Content />
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Content from './views/Content.vue'
import { Grid } from 'ant-design-vue';
import Menu from './components/Menu.vue'

const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();
const collapsed = ref<boolean>(false)

console.log('This is a sidebar', collapsed)
const open = ref<boolean>(false);

const showDrawer = () => {
  open.value = true;
};

const onClose = () => {
  open.value = false;
};
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
  max-width: 100%;
  margin-bottom: 34px;
}
#components-layout-demo-side .logo img {
  width: 100%;
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
#components-layout-demo-side .ant-layout-sider-light .ant-layout-sider-trigger {
  background: #000;
}
</style>
