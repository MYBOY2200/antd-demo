import { axios } from '@/utils/request'

/// 获取部门列表
export function getDepartmentList(parameter) {
  return axios({
    url: '/department/tree',
    method: 'post',
    data: parameter
  })
}

/// 获取角色列表
export function getRolerList(parameter) {
  return axios({
    url: '/department/role/page',
    method: 'post',
    data: parameter
  })
}

/// 获取角色权限
export function getRolerPrivileges(parameter) {
  return axios({
    url: '/department/privilege/list',
    method: 'post',
    data: parameter
  })
}

// 删除角色权限
export function deleteRolerPrivilege(parameter) {
  return axios({
    url: '/department/role/privilege/delete',
    method: 'post',
    data: parameter
  })
}

/// 添加角色权限
export function addRolerPrivileges(parameter) {
  return axios({
    url: '/department/role/privilege/create',
    method: 'post',
    data: parameter
  })
}

/// 新增角色
export function createRoler(parameter) {
  return axios({
    url: '/department/role/create',
    method: 'post',
    data: parameter
  })
}

/// 删除角色
export function deleteRoler(parameter) {
  return axios({
    url: '/department/role/delete',
    method: 'post',
    data: parameter
  })
}

/// 更新角色名称
export function updateRolerName(parameter) {
  return axios({
    url: '/department/role/update',
    method: 'post',
    data: parameter
  })
}
