<script setup>
const pullIn = event => console.log(event)
</script>

<template>
  <div class="btn box-shadow transition" @click="pullIn">
    click
  </div>
</template>

<style scoped>
.btn {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #FA9740 0%, #F25E1E 100%);
  border-radius: 22px;
  position: fixed;
  top: 30%;
  right: -14px;
  text-align: center;
  line-height: 44px;
}

.transition {
  transition: right 400ms;
  -webkit-transition: right 400ms; /* Safari */
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}

div.btn:active {
  right: 2px;
}

.show-hide {
  animation: pull-in 400ms alternate ease-in-out;
  -webkit-animation: pull-in 400ms alternate ease-in-out; /* Safari and Chrome */
}

@keyframes pull-in {
  from {
    right: -14px
  }
  to {
    right: 2px
  }
}

@-webkit-keyframes pull-in /* Safari 与 Chrome */
{
  from {
    right: -14px
  }
  to {
    right: 2px
  }
}
</style>
