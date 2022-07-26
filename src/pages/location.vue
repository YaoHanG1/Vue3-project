<template>
  <el-row :gutter="20">
    <el-col :span="6" v-for="item in panels" :key="item.title">
      <el-card class="panels-card" shadow="hover">
        <!-- <div class="item"><span>{{ item.title }}</span><el-tag class="ml-2" :type="item.unitColor">{{item.unit}}</el-tag></div> -->
        <template #header>
          <div class="card-header">
            <span>{{ item.title }}</span>
            <el-tag class="ml-2" :type="item.unitColor">{{ item.unit }}</el-tag>
          </div>
        </template>
        <div class="item">
          <div class="item-ding">{{ item.value }}</div>
          <div class="item-bottom"><span>{{ item.subTitle }}</span><span>{{ item.subValue }}</span></div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="3" v-for="item2 in list" :key="item2.title" class="two">
      <el-card shadow="hover" @click="tomenu(item2)">
        <div class="jiu">
          <component :is="item2.icon" class="icon" :color="item2.color"></component>
          <div>{{ item2.title }}</div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="12">
      <el-card shadow="never">
        <template #header>
          <div class="echarts-hearde">
            <span>订单统计</span>
            <div class="check-bag">
              <el-tag :type="loadEcharts === 'month' ? 'success' : 'info'" size="large" @click="getEcharts('month')">
                近一个月
              </el-tag>
              <el-tag :type="loadEcharts === 'week' ? 'success' : 'info'" size="large" @click="getEcharts('week')">近一周
              </el-tag>
              <el-tag :type="loadEcharts === 'hour' ? 'success' : 'info'" size="large" @click="getEcharts('hour')">近24小时
              </el-tag>
            </div>
          </div>
        </template>
        <v-chart class="chart" :option="option"></v-chart>
      </el-card>
    </el-col>

    <el-col :span="12">
      <el-card shadow="never">
        <template #header>
          <div class="shop-title">
            <span>店铺及商品提示</span>
            <el-tag effect="plain" type='danger' size="small">店铺及商品提示</el-tag>
          </div>
        </template>
        <el-row :gutter="20">
          <el-col :span="6" v-for="shop in shopDeal.goods" :key="shop.label">
            <el-card shadow="hover">
              <div class="flex flex-col items-center justify-center pointer">
                <span class="text-xl mb-2">{{ shop.value }}</span>
                <span class="text-sm text-gray-500">{{ shop.label }}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
      <el-card shadow="never" class="order">
        <template #header>
          <div class="shop-title">
            <span>交易提示</span>
            <el-tag effect="plain" type='danger' size="small">需要立即处理的交易订单</el-tag>
          </div>
        </template>
        <el-row :gutter="20">
          <el-col :span="6" v-for="order in shopDeal.order" :key="order.label">
            <el-card shadow="hover">
              <div class="flex flex-col items-center justify-center pointer">
                <span class="text-xl mb-2">{{ order.value }}</span>
                <span class="text-sm text-gray-500">{{ order.label }}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>

import { ref, onMounted, computed } from 'vue'
import { getPanels, getEchartsData, getShopDeal } from '../api/manager'
import { useRouter } from 'vue-router'
const router = useRouter()
let panels = ref([])
// echarts数据
let echartsData = ref({})
// 9张列表数据
const list = [
  {
    icon: 'User',
    color: '#48aff0',
    title: '用户',
    name: 'image'
  },
  {
    icon: 'ShoppingCart',
    color: '#8B5CF6',
    title: '商品'
  },
  {
    icon: 'Tickets',
    color: '#E274F3',
    title: '订单'
  },
  {
    icon: 'Comment',
    color: '#4FCABC',
    title: '评价'
  },
  {
    icon: 'PictureFilled',
    color: '#F54966',
    title: '图库'
  },
  {
    icon: 'Bell',
    color: '#10B981',
    title: '公告'
  },
  {
    icon: 'SetUp',
    color: '#303133',
    title: '配置'
  },
  {
    icon: 'Files',
    color: '#F7B648',
    title: '优惠卷'
  },
]
const shopDeal = ref([])
// 获取主要顶上面板数据
const getPanelsData = async () => {
  const result = await getPanels()
  panels.value = result.panels
}
// 节流，当前数据是请求数据则直接retur  
let loadEcharts = ref('')
const getEcharts = async (date) => {
  if (date == loadEcharts) return
  const result = await getEchartsData(date)
  echartsData.value = result
  loadEcharts.value = date
}

// 获取右下角店铺商品交易
const getShop = async () => {
  const result = await getShopDeal()
  shopDeal.value = result
}
onMounted(() => {
  getPanelsData()// 调用顶上面板数据
  getEcharts('hour')
  getShop()
})
const tomenu = (name) => {
  router.push({
    name: name.name
  })
}

const option = computed(() => {
  return {
    xAxis: {
      type: 'category',
      data: echartsData.value.x
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: echartsData.value.y,
        type: 'bar'
      }
    ]
  }
})



</script>

<style lang="scss" scoped>
.panels-card {
  display: flex;
  flex-direction: column;
  flex: 1;

  .item {
    height: 100%;

    .item-ding {
      font-size: 1.875rem;
      height: 60px;
    }

    ;

    .item-bottom {
      height: 60px;
      line-height: 60px;
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #dcdfe6;
      font-size: 14px;
      color: #6b7280;
    }
  }
}

.two {
  margin: 10px 0;
}

.jiu {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  div {
    margin-top: 5px;
  }

  ;

  .icon {
    height: 16px;
    width: 16px;
  }
}

.chart {
  height: 300px;
}

.echarts-hearde {
  display: flex;
  justify-content: space-between;

  .el-tag {
    margin-left: 10px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer
  }

}

.order {
  margin-top: 10px
}

.shop-title {
  display: flex;
  justify-content: space-between;
}
</style>