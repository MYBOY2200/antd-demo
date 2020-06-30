<!--
 * @Name: 部门管理
 * @Author: 王海博
 * @Date: 2020-06-29
 * @LastEditors: 王海博
 * @LastEditTime: 2020-06-29
 -->
<template>
  <div>
    <div class="department-wrapper">
      <!-- 列表 -->
      <a-table :columns="columns" :data-source="data">
        <span slot="tags" slot-scope="tags">
          <a-tag v-for="tag in tags" :key="tag">{{ tag }}</a-tag>
        </span>
        <span slot="action">
          <a href="#">编辑</a>
          <a-divider type="vertical" />
          <a href="#">新增</a>
          <a-divider type="vertical" />
          <a href="#">删除</a>
        </span>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: '部门编码',
          dataIndex: 'departmentCode'
        },
        {
          title: '部门名称',
          dataIndex: 'departmentName'
        },
        {
          title: '所有业务',
          dataIndex: 'allBusiness',
          scopedSlots: { customRender: 'tags' }
        },
        {
          title: '操作',
          dataIndex: 'actions',
          scopedSlots: { customRender: 'action' }
        }
      ],
      data: [
        {
          key: 1,
          departmentCode: '155',
          departmentName: '测试一级部门',
          allBusiness: ['在线续方', '排班服务', '药店业务'],
          children: [
            {
              key: 11,
              departmentCode: '255',
              departmentName: '测试二级部门1',
              allBusiness: ['在线续方', '排班服务', '药店业务']
            },
            {
              key: 12,
              departmentCode: '256',
              departmentName: '测试二级部门2',
              allBusiness: ['在线续方', '排班服务', '药店业务']
            }
          ]
        },
        {
          key: 2,
          departmentCode: '001',
          departmentName: '测试',
          allBusiness: ['在线续方', '排班服务', '药店业务']
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.department-wrapper {
  padding: 24px;
  background-color: #fff;
}
</style>
