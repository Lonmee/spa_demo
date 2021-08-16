<script setup>
import BottomNavigator from "./components/shared/BottomNavigator.vue";
import SearchHeader from "./components/shared/SearchHeader.vue";
</script>

<template>
  <SearchHeader/>
  <router-view class="flex-1 content" @dblclick.prevent/>
  <BottomNavigator/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.margin-padding-reducer {
  margin: 0;
  padding: 0;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-1 {
  flex: 1;
}

.align-items-center {
  align-items: center;
}

.space-between {
  justify-content: space-between;
}

.space-evenly {
  justify-content: space-evenly;
}

.space-around {
  justify-content: space-around;
}

.content {
  overflow: scroll;
}

.small-font {
  font-size: .8rem;
}


/*为导航栏+状态栏的高度 88px*/
/*如果未竖屏时为0*/
/*如果未竖屏时为0*/
/*为底下圆弧的高度 34px*/

/* 全局定义一个变量*/
/*--ipxBottom: 0px;*/
/*--ipxBottom: constant( safe-area-inset-bottom); !* 兼容 iOS < 11.2 *!*/
/*--ipxBottom: env(safe-area-inset-bottom);!* 兼容 iOS >= 11.2 *!*/
/*padding-bottom: var(--ipxBottom)*/
.safe-area-inset {
  padding-top: constant(safe-area-inset-top);
  padding-left: constant(safe-area-inset-left);
  padding-right: constant(safe-area-inset-right);
  padding-bottom: constant(safe-area-inset-bottom);
  padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding-bottom: env(safe-area-inset-bottom);
  margin-bottom: 20px;
}

input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #CBCBCB;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #CBCBCB;
}

input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #CBCBCB;
}

input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #CBCBCB;
}
</style>
