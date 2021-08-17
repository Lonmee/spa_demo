<template>
  <div class="flex-row space-around align-items-center top-nav box-shadow">
    <div class="search-bar">
      <img/>
      <input class="no-border input" type="text" placeholder="搜索产品/店铺">
      <button>x</button>
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
</template>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, .8);
  padding: 6px 0;
}

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

.input {
  width: 76%;
  font-size: .8rem;
  outline: none;
}

.no-border {
  border: none;
  background-color: #F3F5F7;
}

input:focus {
  outline: none;
}
</style>

<style>
.top-search-header-margin {
  margin-top: 36px;
}
</style>
