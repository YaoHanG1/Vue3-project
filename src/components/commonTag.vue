<template>
  <div class="tag">
    <el-tag v-for="(tag, index) in tags" :key="tag.name" :closable="tag.name !== 'location'"
      @close="handleClose(tag, index)" @click="btn(tag)"
      :effect="route.name=== tag.name ? 'dark' : 'plain'" size="large" 
      type="warning"
      class="ml-2">
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore, } from 'vuex';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { getCookieTabs } from '../composables/auth'
const store = useStore()
const router = useRouter()
const route = useRoute()



const tags = computed(() => {
  return getCookieTabs()
})
const handleClose = (tag, index) => {
  store.commit('closeTag', tag)
  // removeCookieTags()
  const length = tags.value.length - 1
  if (tag.name !== router.currentRoute.value.name) {
    return
  }
  if (index === length) {
    router.push({
      name: tags.value[index].name
    })
  } else {
    router.push({
      name: tags.value[index - 1].name
    })

  }
}
const btn = (tag) => {
  router.push({ name: tag.name })
}

</script>

<style lang="scss" scoped>


.el-tag {
  cursor: pointer
}
.tag {
  margin-bottom: 10px;
}
</style>