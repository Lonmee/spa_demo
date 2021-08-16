<script>
export default {
  name: "Home",
  data() {
    return {}
  },
  methods: {}
}
</script>

<template>
  <div class="safe-area-inset">
    <h2 class="title"><img src="src/assets/logo.png"></h2>
    <h2 class="title"><img src="src/assets/logo.png"></h2>
    <h2 class="title"><img src="src/assets/logo.png"></h2>
    <h2 class="title"><img src="src/assets/logo.png"></h2>
    <h2 class="title"><img src="src/assets/logo.png"></h2>
    <h2 class="title"><img src="src/assets/logo.png"></h2>
    <h2 class="title"><img src="src/assets/logo.png"></h2>
    <div class="flex-row space-around align-items">
      <div class="search-bar">
        <img/>
        <input class="no-border" type="text" placeholder="搜索产品/店铺">
      </div>
      <div>
        <span class="font">USD</span>
        <button>x</button>
      </div>
      <div>
        <span class="font">中文</span>
        <button>x</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-bar {
  width: 209px;
  height: 28px;
  background: #F3F5F7;
  border-radius: 14px;
  display: flex;
  justify-content: center;
}

.font {
  width: 25px;
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 17px;
  padding-right: 4px;
}

.no-border {
  border: none;
  background-color: #F3F5F7;
}

input:focus{
  outline:none;
}
</style>
