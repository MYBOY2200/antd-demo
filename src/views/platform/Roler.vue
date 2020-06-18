<!--
 * @Name: 角色管理
 * @Author: StephenChen
 * @Date: 2019-09-30 16:07:19
 * @LastEditors: StephenChen
 * @LastEditTime: 2019-12-06 13:53:33
 -->

<template>
  <div>
    <a-card :bordered="false">
      <!-- 搜索 -->
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="搜索角色">
                <a-input placeholder="请输入搜索内容" v-model="queryParam.name" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <span class="table-page-search-submitButtons">
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => (queryParam = {})">重置</a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <!-- 添加 -->
      <div class="operate" style="margin-bottom: 20px;">
        <a-button
          type="dashed"
          style="width: 100%"
          icon="plus"
          @click="() => (showCreateRoler = true)"
        >添加</a-button>
      </div>

      <!-- 列表 -->
      <s-table
        ref="table"
        :columns="columns"
        :data="loadData"
        :rowKey="record => record.id"
        showPagination="auto"
      >
        <!-- 状态 -->
        <span slot="status" slot-scope="text">
          <a-badge :status="text | statusTypeFilter" :text="text | statusFilter" />
        </span>

        <!-- 角色名称 -->
        <span slot="roles" slot-scope="text, record">
          <a-tag v-for="(item, index) in record.privilegeList" :key="index">{{ item.name }}</a-tag>
        </span>

        <!-- 操作 -->
        <span slot="actions" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a @click="handleDelete(record)">删除</a>
        </span>
      </s-table>

      <!-- 新增角色 -->
      <a-modal
        :title="rolerInfo.isEdit ? '编辑角色' : '新增角色'"
        v-model="showCreateRoler"
        width="800px"
        style="min-width:800px;"
        :centered="true"
        :closable="false"
        :maskClosable="false"
        cancelText="取消"
        okText="提交"
        :okButtonProps="{ props: { disabled: isDisabled() } }"
        @ok="updateRoler()"
        @cancel="onCancelRoler()"
      >
        <a-form>
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            :required="true"
            label="一级部门："
          >
            <a-select
              placeholder="请选择部门"
              @change="handleChangeDep1"
              v-model="rolerInfo.dept1"
              :disabled="rolerInfo.isEdit"
            >
              <a-select-option
                v-for="(item, index) in dep1List"
                :key="index"
                :value="item.key"
              >{{ item.title }}</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            :required="false"
            label="二级部门："
          >
            <a-select
              placeholder="请选择部门"
              @change="handleChangeDep2"
              v-model="rolerInfo.dept2"
              :disabled="rolerInfo.isEdit"
            >
              <a-select-option
                v-for="(item, index) in dep2List"
                :key="index"
                :value="item.key"
              >{{ item.title }}</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            :required="true"
            label="角色名称："
          >
            <a-input placeholder="请输入角色名称" v-model="rolerInfo.roleName"></a-input>
          </a-form-item>

          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            :required="true"
            label="角色权限："
          >
            <a-transfer
              :dataSource="transferData"
              :titles="['所有权限', '已选权限']"
              :targetKeys="transferTargetKeys"
              :selectedKeys="transferSelectedKeys"
              :render="item => item.title"
              @change="onTransferChange"
              @selectChange="onTransferSelectChange"
            />
          </a-form-item>
        </a-form>
      </a-modal>
    </a-card>
  </div>
</template>

<script>
import { STable } from '@/components'
import {
  getDepartmentList,
  getRolerList,
  getRolerPrivileges,
  deleteRolerPrivilege,
  addRolerPrivileges,
  createRoler,
  deleteRoler,
  updateRolerName
} from '@/api/platform'

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 13 }
}

const statusMap = {
  Drafting: {
    status: 'default',
    text: '创建'
  },
  Reviewing: {
    status: 'warning',
    text: '待启用'
  },
  Rejected: {
    status: 'error',
    text: '拒绝'
  },
  Normal: {
    status: 'success',
    text: '启用'
  },
  '': {
    status: 'error',
    text: '异常'
  },
  Abnormal: {
    status: 'error',
    text: '禁用'
  }
}

export default {
  components: {
    STable
  },
  data () {
    return {
      queryParam: {},
      showCreateRoler: false,
      formItemLayout,

      columns: [
        {
          title: '角色名称',
          dataIndex: 'name'
        },
        {
          title: '一级部门',
          dataIndex: 'firstDepartment.departmentName'
        },
        {
          title: '二级部门',
          dataIndex: 'secondDepartment.departmentName'
        },
        {
          title: '角色权限',
          width: '400px',
          dataIndex: 'roles',
          scopedSlots: { customRender: 'roles' }
        },
        {
          title: '操作',
          width: '150px',
          scopedSlots: { customRender: 'actions' }
        }
      ],
      loadData: parameter => {
        return getRolerList(Object.assign(parameter, this.queryParam)).then(res => {
          return res.result
        })
      },

      rolerInfo: {}, // 当前编辑角色信息
      deptList: [], // 部门列表
      dep1List: [], // 一级部门
      dep2List: [], // 二级部门
      transferData: [],
      transferTargetKeys: [],
      transferSelectedKeys: []
    }
  },
  created () {
    this.loadDepartmentList()
  },
  filters: {
    statusFilter (type) {
      return statusMap[type || ''].text
    },
    statusTypeFilter (type) {
      return statusMap[type || ''].status
    }
  },
  methods: {
    // 选项在两栏之间转移
    onTransferChange (nextTargetKeys, direction, moveKeys) {
      console.log('onTransferChange: ', nextTargetKeys)
      this.transferTargetKeys = nextTargetKeys
    },
    // 选中项发生改变
    onTransferSelectChange (sourceSelectedKeys, targetSelectedKeys) {
      console.log('onTransferSelectChange')
      this.transferSelectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys]
    },

    // 提交按钮状态
    isDisabled () {
      return (
        !this.rolerInfo ||
        !this.rolerInfo.dept1 ||
        !this.rolerInfo.dept1.length ||
        !this.rolerInfo.roleName ||
        !this.rolerInfo.roleName.length ||
        !this.transferTargetKeys ||
        !this.transferTargetKeys.length
      )
    },

    // 加载部门
    async loadDepartmentList () {
      const res = await getDepartmentList()
      this.deptList = res.result || []
      this.dep1List = []
      if (this.deptList.length) {
        this.deptList.forEach(dept => {
          this.dep1List.push({ key: dept.id, title: dept.departmentName })
        })
      }
    },
    // 选择一级部门，关联二级部门
    handleChangeDep1 (value, option) {
      // 清除二级部门选项
      const tempRolerInfo = this.rolerInfo
      tempRolerInfo.dept2 = undefined
      this.rolerInfo = { ...tempRolerInfo }

      // 加载并关联二级部门
      if (value && this.deptList) {
        this.loadDeptPrivileges(value)
      }
      this.updateDep2List(value)
    },
    // 更新二级部门列表
    updateDep2List (dept1) {
      if (dept1 && this.deptList) {
        const temp = (this.deptList.find(x => x.id === dept1) || {}).departmentInfoTreeList || []
        if (temp.length) {
          temp.forEach(dept => {
            this.dep2List.push({ key: dept.id, title: dept.departmentName })
          })
        } else {
          this.dep2List = []
        }
      } else {
        this.dep2List = []
      }
      console.log('二级部门 >>>', this.dep2List)
    },
    // 选择二级部门
    handleChangeDep2 (value, option) {
      // this.rolerInfo.dept2 = value
      this.loadDeptPrivileges(value)
    },

    // 加载角色权限
    async loadDeptPrivileges (departmentId) {
      this.transferData = []
      if (!departmentId || !departmentId.length) return
      const res = await getRolerPrivileges({ departmentId })
      this.transferData = res.result || []
      this.transferData = JSON.parse(
        JSON.stringify(this.transferData)
          .replace(/id/g, 'key')
          .replace(/name/g, 'title')
      )
    },
    // 删除角色权限
    deleteDeptPrivileges (roleId, privileges) {
      return Promise.all(
        privileges.map(privilege => deleteRolerPrivilege({ roleId: roleId, privilegeId: privilege.id }))
      )
    },
    // 新增角色权限
    addDeptPrivileges (roleId, privilegeKeys) {
      return Promise.all(privilegeKeys.map(key => addRolerPrivileges({ roleId: roleId, privilegeId: key })))
    },

    // 新增或更新角色
    async updateRoler () {
      this.rolerInfo.departmentId =
        this.rolerInfo.dept2 && this.rolerInfo.dept2.length ? this.rolerInfo.dept2 : this.rolerInfo.dept1
      if (this.rolerInfo.isEdit && this.rolerInfo.roleId) {
        // 更新部门角色名称
        await updateRolerName({ roleId: this.rolerInfo.roleId, roleName: this.rolerInfo.roleName })
        // 删除角色权限
        if (this.rolerInfo.privilegeList && this.rolerInfo.privilegeList.length) {
          await this.deleteDeptPrivileges(this.rolerInfo.roleId, this.rolerInfo.privilegeList)
        }
      } else {
        // 新增部门角色
        const res = await createRoler(this.rolerInfo)
        this.rolerInfo.roleId = (res.result || {}).id
      }

      // 添加角色权限
      if (this.transferTargetKeys && this.transferTargetKeys.length && this.rolerInfo.roleId) {
        await this.addDeptPrivileges(this.rolerInfo.roleId, this.transferTargetKeys)
      }

      this.$notification.success({ message: '提交成功' })
      this.onCancelRoler()
      this.$refs.table.refresh(true)
    },
    // 取消编辑
    onCancelRoler () {
      this.showCreateRoler = false
      this.rolerInfo = {}
      this.transferTargetKeys = []
      this.dep2List = []
    },
    // 编辑角色
    handleEdit (record) {
      const tempRolerInfo = {}
      tempRolerInfo.isEdit = true
      tempRolerInfo.roleId = record.id
      tempRolerInfo.privilegeList = record.privilegeList

      tempRolerInfo.roleName = record.name
      tempRolerInfo.dept1 = record.firstDepartment.id
      if (record.secondDepartment) tempRolerInfo.dept2 = record.secondDepartment.id
      this.loadDeptPrivileges(tempRolerInfo.dept2 ? tempRolerInfo.dept2 : tempRolerInfo.dept1) // 获取部门权限列表
      this.updateDep2List(tempRolerInfo.dept1) // 获取二级部门列表

      if (record.privilegeList && record.privilegeList.length) {
        record.privilegeList.forEach(privilege => {
          this.transferTargetKeys.push(privilege.id)
        })
      }

      this.rolerInfo = { ...tempRolerInfo }
      this.showCreateRoler = true
    },
    // 修改角色状态
    handleDisable (record) {
      // TODO
    },
    // 删除角色
    handleDelete (record) {
      const that = this
      this.$confirm({
        title: `确定要删除角色"${record.name}"吗？`,
        content: '删除后将无法恢复该角色信息',
        onOk () {
          return deleteRoler({ roleId: record.id }).finally(() => that.$refs.table.refresh(true))
        },
        onCancel () { }
      })
    }
  }
}
</script>
<style scoped lang="less"></style>
