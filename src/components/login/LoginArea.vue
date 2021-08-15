<script setup>
import {COUNTRIES} from "../../utils/data/Countries";
</script>

<script>
export default {
  methods: {
    back(mc) {
      this.$route.params = {mc}
      this.$router.back();
    }
  }
}
</script>

<template>
  <div class="container">
    <div id="loginArea" class="flex-row item" @click="back(c.mobileCode)" v-for="c in COUNTRIES.exports">
      <div>
        {{ c.cnName }}
      </div>
      <div class="code">
        +{{ c.mobileCode }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin: .4rem 1.2rem;
  padding: 0 .6rem;
  justify-content: space-between;
  line-height: 1.2rem;
  border-bottom: 1px solid #dbdbdb;
  font-size: 1.2rem;
}

.code {
  font-size: .9rem;
  color: #999;
}
</style>
