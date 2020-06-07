<template>
  <div id="app">
    <el-container class="app-container">
      <el-aside width="220px">
        <!-- 左边的导航菜单 -->
        <div class="aside">
          <div class="aside_box">
            <span class="aside_title">HC小区管理系统</span>
          </div>
          <div class="navs">
            <!-- <div v-for='(nav,idx) in navs' :key='idx'>
             <i class="fa icont" :class='nav.icon'></i>
              <router-link tag="span" :to="nav.path" v-text='nav.text'></router-link>
            </div> -->
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">我的小区</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>

              <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header class="app-header">
          <div
            class="header"
            height="60px"
          >header</div>
        </el-header>
        <!-- 主题内容区域 -->
        <el-main class="app-main">
          <div class="main">
            <router-view></router-view>
          </div>
        </el-main>
        <!-- 底部区域 -->
        <el-footer class="app-footer">
          <div class="footer">footer</div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      // navs: [
      //   { path: '/shop', text: '小区管理', icon: 'fa-camera-retro' },
      //   { path: '/shop', text: '资产管理', icon: 'list-ui' },
      //   { path: '/shop', text: '业主管理', icon: 'glass' },
      //   { path: '/shop', text: '费用管理', icon: 'id-badge' },
      //   { path: '/shop', text: '智慧服务', icon: 'puzzle-piece' },
      //   { path: '/shop', text: '智慧停车', icon: 'qrcode' },
      //   { path: '/shop', text: '报修管理', icon: 'reorder' },
      //   { path: '/shop', text: '组织管理', icon: 'ship' },
      //   { path: '/shop', text: '采购管理', icon: 'tree' },
      //   { path: '/shop', text: '设备管理', icon: 'paragraph' },
      //   { path: '/shop', text: '系统管理', icon: 'th' },
      //   { path: '/shop', text: '巡检管理', icon: 'font' }
      // ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {

  }

}
</script>

<style lang='scss'>
html,
body {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
  //  background: rgba(243, 243, 244);
  background: #d8d8d8;
  .app-container {
    height: 100%;
  }
  .app-header,
  .app-main,
  .app-footer {
    padding-left: 0;
    padding-right: 0;
  }
  .app-footer {
    padding-bottom: 0;
  }
  .aside {
    .icont {
      display: inline-block;
      font-size: 12px;
      color: #6666;
      cursor: pointer;
    }
    // background: rgba(39, 58, 74);
    background: #2c3e50;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    .aside_box {
      box-sizing: border-box;
      line-height: 110px;
      margin-left: 10px;
      .aside_title {
        color: white;
        font-size: 14px;
        cursor: pointer;
      }
      .aside_title:hover {
        text-decoration: underline;
        color: rgb(25, 233, 25);
      }
    }
    // .navs {
    //   & > div {
    //     line-height: 35px;
    //     color: white;
    //   }
    // }
  }
  .header {
    // background: rgba(255, 255, 255);
    background: white;
    width: 100%;
    height: 100%;
  }
  .main {
    background: white;
    height: 100%;
  }
  .footer {
    background: white;
    height: 40px;
  }
}
</style>
