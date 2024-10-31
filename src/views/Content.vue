<template>
  <a-table
    :row-key="record => record.id"
    :row-selection="{
      selectedRowKeys: selectedRowKeys,
      onChange: s => {
        console.log('selectedRowKeys changed: ', s)
        selectedRowKeys = s
      },
    }"
    sticky
    :columns="columns"
    :data-source="data"
    :scroll="{ x: 1500 }"
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'"><a>action</a></template>
    </template>
    <template #expandedRowRender>
      <a-table :columns="innerColumns" :data-source="innerData" :pagination="false">
      </a-table>

    </template>
  </a-table>
</template>
<script lang="ts" setup>
import type { TableColumnsType } from 'ant-design-vue'
import { ref } from 'vue'

const selectedRowKeys = ref<readonly string[]>([])
const columns = ref<TableColumnsType>([
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age.year',
    key: 'age.year',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
  },
])

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    id: i,
    name: `Edrward ${i}`,
    age: { year: 32 },
    address: `London Park no. ${i}`,
  })
}
const fixedTop = ref(false)
</script>
<style scoped>
#components-table-demo-summary tfoot th,
#components-table-demo-summary tfoot td {
  background: #fafafa;
}
[data-theme='dark'] #components-table-demo-summary tfoot th,
[data-theme='dark'] #components-table-demo-summary tfoot td {
  background: #1d1d1d;
}
</style>
