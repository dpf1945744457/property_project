<template>
  <div id='app'>
    <!-- 显示主页 -->
    <el-container class='app-container'>
      <!-- 左侧导航菜单 -->
      <el-aside
        :width="isCollapse ? '60px': '200px'"
        class='app-aside'
      >
        <div class="aside_title">
          <p>HC小区管理系统</p>
        </div>
        <!-- 侧边栏菜单区域 -->
        <div class="aside_navs">
          <el-menu
            background-color="#333744"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened
            :collapse="isCollapse"
            :collapse-transition="false"
            router
          >
            <!-- 一级菜单 -->
            <el-submenu index="1">
              <!-- <el-submenu :index="item.id +''" v-for='item in menulist' :key="item.id"> -->
              <!-- 一家菜单的模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <!-- <span>{{item.authname}}</span> -->
                <span>
                  小区管理
                </span>
              </template>

              <!-- 二级菜单 -->
              <!-- <el-menu-item index=" '/' +subItem.path" v-for="subItem in item.children" :key="subItem.id"> -->
              <el-menu-item index="1-4-1">
                <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-location"></i>
                  <!-- 文本 -->
                  <!-- <span>{{subItem .authname}}</span> -->
                  <span>
                    <router-link to="/home">我的小区</router-link>
                  </span>
                </template></el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>

      <el-container>
        <!-- 顶部区域 -->
        <el-header class='app-header'>
          <div
            class="toggle-button"
            @click="toggleCollapse"
          >
            |||
          </div>
          <div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                老九大人法非法人
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>老九大人法非法人</el-dropdown-item>
                <el-dropdown-item>老九学堂</el-dropdown-item>
                <el-dropdown-item>老九学堂</el-dropdown-item>
                <p>更多小区</p>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="header_welcome">
            <p>欢迎访问HC小区管理系统,wuxu!</p>
          </div>
          <div class="header_message">
            <el-badge
              :value="12"
              class="item"
            >
              <i class="el-icon-star-on icont"></i>
            </el-badge>
          </div>
          <div class="header_out">
            <i class="el-icon-error"></i>
            <i>退出</i>
          </div>
        </el-header>

        <!-- 内容主体区域 -->
        <el-main class='app-main'>
          <router-view>
          </router-view>
        </el-main>

        <!-- 底部区域-->
        <el-footer class='app-footer'>
          <p>Copyright</p>
          <p>java 110 团队</p>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      /*   左侧菜单数据 */
      menulist: [],
      //   是否折叠
      isCollapse: false
    }
  },
  created () {
    // this.getMenuList()
  },
  methods: {
    // async getMenuList () {
    //   const { data: res } = await this.$http.get('menus')
    //   if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
    //   this.menulist = res.data
    //   console.log(res)
    // }

    /* 点击按钮 切换菜单的折叠和展开 */
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }
    // pink () {
    //   this.router.push('/home')
    // }
  }
}
</script>

<style lang='scss'>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(247, 248, 250, 1);
}
#app {
  height: 100%;
  .app-container {
    height: 100%;
  }
  .app-aside {
    width: 100%;
    background-color: #333744;
    .aside_title {
      line-height: 65px;
      box-sizing: border-box;
      padding-left: 20px;
      & > p {
        color: white;
        font-size: 14px;
        white-space: nowrap;
      }
      & > p:hover {
        color: cyan;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .el-menu {
      border-right: none;
    }
  }
  .app-header {
    height: 61px;
    background: white;
    display: flex;
    align-items: center;
    .toggle-button {
      background-color: greenyellow;
      text-align: center;
      line-height: 30px;
      height: 30px;
      width: 30px;
      color: white;
    }
    .el-dropdown-link {
      margin-left: 750px;
      color: #666;
      font-weight: 600;
      margin-right: 30px;
    }
    .header_welcome {
      color: #656544;
      font-size: 12px;
      margin-right: 20px;
    }
    .header_message {
      .icont {
        font-size: 16px;
      }
    }
    .header_out {
      margin-left: 50px;
    }
  }
  .app-main {
    background: #f8fcfc;
  }
  .app-footer {
    background: white;
    display: flex;
    & > p:nth-child(1) {
      color: #666;
      margin-right: 12px;
    }
    & > p:nth-child(2) {
      color: #222;
      margin-right: 12px;
    }
  }
}
</style>
