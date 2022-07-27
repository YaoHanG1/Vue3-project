<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div class="title">欢迎光临</div>
        <div class="title">
        <span>{{year}}-</span>
        <span>{{month}}-</span>
        <span class="mr-4">{{day}}  </span>
        <span>{{hours}}:</span>
        <span>{{minutes}}:</span>
        <span>{{seconds}}</span>
        </div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <h2 class="login-title">欢迎回来</h2>
      <div class="login-text">  
        <span class="txt"></span>
        <span>账号密码登陆</span>
        <span class="txt"></span>
      </div>
      <el-form ref="fromRef" :model="form" :rules="rules" class="w-[250px]">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" show-password placeholder="请输入密码">
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button round type="primary" @click="onSubmit" :loading="loading" class="w-[250px]">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { toast } from '../composables/util'
import { useStore } from 'vuex'
import { setCookieTabs } from '../composables/auth'

let year = ref(new Date().getFullYear())
let month = ref(new Date().getMonth() < 10 ? '0' + (new Date().getMonth()+1) : new Date().getMonth()+1)
let day = ref(new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate())
let hours = ref(new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours())
let minutes = ref(new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes())
let seconds = ref(new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds())
setInterval(() => {
  year.value = new Date().getFullYear()
  month.value = new Date().getMonth() < 10 ? '0' + (new Date().getMonth()+1) : new Date().getMonth()+1
  day.value = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()
  hours.value = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()
  minutes.value = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
  seconds.value = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
  // console.log(seconds);
}, 1000);


// 拿到store实例
const store = useStore()

const router = useRouter()
// do not use same name with ref
const form = reactive({
  username: '',
  password: ''
})
const loca = [{
  path: '/location',
  name: 'location',
  label: '主控台',
}]
// 绑定整个表单
const rules = {
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
  ],
}
// 按钮是否请求状态
const loading = ref(false)
// 拿到表单验证布尔值
const fromRef = ref(null)

const onSubmit = () => {

  fromRef.value.validate(valid => {
    if (!valid) return false
    loading.value = true
    store.dispatch('login', form).then(res => {
      toast('登陆成功')
      setCookieTabs('tabsList', JSON.stringify(loca))

      router.push('/')

    }).finally(() => {
      loading.value = false
    })

  })
}
// 键盘事件
function onKeyUp(e) {
  if (e.key === "Enter") onSubmit()
}

onMounted(() => {
  document.addEventListener("keyup", onKeyUp)
})

onBeforeUnmount(() => {
  document.removeEventListener("keyup", onKeyUp)
})



</script>

<style scoped lang="scss">
.login-container {
  /* 最小高度是100vh 背景颜色是天空蓝 */
  @apply min-h-screen bg-sky-400;

  .left .title {
    @apply font-bold text-5xl text-light-500 mb-4
  }

  ;

  .left,
  .right {
    // 设置flex布局，水平垂直居中
    @apply flex justify-center items-center;

    .login-title {
      // 字体加粗 字体大小  字体颜色
      @apply font-bold text-3xl text-gray-800
    }

    ;

    .login-text {
      //  设置flex 设置居中 上下外边距5px 字体颜色rgb 控制水平左右的间隔
      @apply flex items-center justify-center my-5 text-gray-300 space-x-2;

      .txt {
        // 高度1px 宽度16px 背景颜色
        @apply h-[1px] w-16 bg-gray-200
      }
    }
  }

  ;

  .right {
    // 背景颜色跟 flex-direction: column
    @apply bg-light-50 flex-col
  }
}
</style>