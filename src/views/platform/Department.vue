<!--
 * @Name: 部门管理
 * @Author: 王海博
 * @Date: 2020-06-30
 * @LastEditors: 王海博
 * @LastEditTime: 2020-07-2
 -->
<template>
  <div>
    <div class="department-wrapper">
      <!-- 搜索 -->
      <div class="table-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="搜索部门">
                <a-input placeholder="请输入搜索内容" v-model="queryParam.name" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <span class="table-page-search-submitButtons">
                <a-button type="primary">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => (queryParam = {})">重置</a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <!-- 添加 -->
      <div class="add">
        <a-button type="dashed" style="width: 100%" icon="plus" @click="visible=true">添加</a-button>
      </div>
      <!-- 新增部门 -->
      <a-modal title="新增部门" :visible="visible" width="800px" @cancel="handleCancel">
        <template slot="footer">
          <a-button key="back" @click="handleCancel">取消</a-button>
          <a-button key="submit" type="primary" :loading="loading" @click="handleOk">提交</a-button>
        </template>
        <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 13 }">
          <a-form-item label="部门编码">
            <a-input
              addon-before="编码"
              placeholder="请输入部门编码"
              v-model="departmentInfo.departmentCode"
            />
          </a-form-item>
          <a-form-item label="部门名称">
            <a-input
              addon-before="名称"
              placeholder="请输入部门名称"
              v-model="departmentInfo.departmentName"
            />
          </a-form-item>
          <a-form-item label="所有业务">
            <a-transfer
              :data-source="limitData"
              :target-keys="targetKeys"
              :render="item => item.title"
              :titles="['所有业务', '已选业务']"
              :selected-keys="selectedKeys"
              @change="handleChange"
              @selectChange="handleSelectChange"
            />
          </a-form-item>
        </a-form>
      </a-modal>
      <!-- 列表 -->
      <a-table :columns="columns" :data-source="data">
        <!-- 部门权限 -->
        <span slot="tags" slot-scope="tags">
          <a-tag v-for="tag in tags" :key="tag">{{ tag }}</a-tag>
        </span>
        <!-- 操作 -->
        <span slot="action" slot-scope="text,record">
          <a href="javascript:void(0)">编辑</a>
          <a-divider type="vertical" />
          <a href="javascript:void(0)" @click="visible=true">新增</a>
          <a-divider type="vertical" />
          <a href="javascript:void(0)" @click="handleDelete(record)">删除</a>
        </span>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 搜索
      queryParam: {},

      // 是否显示新增部门
      visible: false,
      // 新增部门提交表单显示的Loading
      loading: false,
      // 部门业务数组(key不能是数字)
      limitData: [
        {
          key: '11',
          title: '在线续方'
        },
        {
          key: '22',
          title: '排班服务'
        },
        {
          key: '33',
          title: '药店业务'
        }
      ],
      // 部门目标业务数组
      targetKeys: ['33'],
      // 设置哪些项应该被选中(limitData中的key值)
      selectedKeys: ['11'],
      // 添加部门信息
      departmentInfo: {
        departmentCode: '', // 添加部门编码
        departmentName: '', // 添加部门名称
        departmentKey: 4 // 部门唯一key值
      },

      // 表的th
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
      // 表的td
      data: [
        {
          key: 1,
          departmentCode: '155',
          departmentName: '测试一级部门',
          allBusiness: ['在线续方', '排班服务', '药店业务'],
          children: [
            {
              key: 3,
              departmentCode: '255',
              departmentName: '测试二级部门1',
              allBusiness: ['在线续方', '排班服务', '药店业务']
            },
            {
              key: 4,
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
  },
  methods: {
    //  删除部门
    handleDelete(record) {
      const that = this
      const key = record.key
      this.$confirm({
        title: `确定要删除部门"${record.departmentName}"吗？`,
        content: '删除后将无法恢复该角色信息',
        // onCancel/onOk 返回 promise 可以延迟关闭
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve()
            }, 1000)
          }).then(() => {
            const tempData = that.data.slice()
            that.data = tempData.filter(item => {
              if (item.children) {
                item.children = item.children.filter(val => val.key !== key)
              }
              return item.key !== key
            })
          })
        },
        onCancel() {}
      })
    },
    // 新增部门提交
    handleOk() {
      this.loading = true
      setTimeout(() => {
        const addDepartment = Object.assign(
          {},
          {
            key: ++this.departmentInfo.departmentKey,
            departmentCode: this.departmentInfo.departmentCode,
            departmentName: this.departmentInfo.departmentName,
            allBusiness: this.selectTitle(this.targetKeys, this.limitData)
          }
        )
        this.data.push(addDepartment)
        // 重置
        this.departmentInfo.departmentCode = ''
        this.departmentInfo.departmentName = ''
        this.targetKeys = ['33']
        this.selectedKeys = ['11']
        this.visible = false
        this.loading = false
      }, 2000)
    },
    // 新增部门取消
    handleCancel() {
      this.visible = false
    },
    // 穿梭框移动回调
    handleChange(nextTargetKeys, direction, moveKeys) {
      this.targetKeys = nextTargetKeys

      console.log('targetKeys: ', nextTargetKeys)
      console.log('direction: ', direction)
      console.log('moveKeys: ', moveKeys)
    },
    // 穿梭框选中回调
    handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    // 穿梭框从targetkey数组选title 参数：（key数组，部门业务数组）
    selectTitle(keyArr, limitArr) {
      let temp = []
      for (let i = 0; i < keyArr.length; i++) {
        temp = temp.concat(limitArr.filter(item => item.key === keyArr[i]))
      }
      const temp1 = []
      for (let i = 0; i < temp.length; i++) {
        temp1.push(temp[i].title)
      }
      return temp1
    }
  }
}
</script>

<style lang="less" scoped>
.department-wrapper {
  padding: 24px;
  background-color: #fff;
  .table-search-wrapper {
    margin-bottom: 20px;
  }
  .add {
    margin-bottom: 20px;
  }
}
</style>
