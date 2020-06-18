import Mock from 'mockjs2'
import { builder } from '../util'

const departmentTree = options => {
  const result = [
    {
      id: '401379511347843072',
      parentId: '',
      hisDepartmentCode: '155',
      stdDepartmentCode: null,
      departmentName: '测试一级部门',
      createBy: 'Stephen',
      createAt: '2019-12-09 11:39:58',
      deleteAt: null,
      isDeleted: false,
      productList: [
        {
          id: '389512229080403968',
          name: '在线续方',
          code: 'prescriptionExtension.svc',
          type: null,
          createAt: null,
          createBy: null,
          deleteAt: null,
          isDeleted: null
        },
        {
          id: '382228709031153664',
          name: '排班服务',
          code: 'schedule.svc',
          type: null,
          createAt: null,
          createBy: null,
          deleteAt: null,
          isDeleted: null
        }
      ],
      departmentInfoTreeList: [
        {
          id: '401379998101016576',
          parentId: '401379511347843072',
          hisDepartmentCode: '255',
          stdDepartmentCode: null,
          departmentName: '测试二级部门1',
          createBy: 'Stephen',
          createAt: '2019-12-09 11:41:54',
          deleteAt: null,
          isDeleted: false,
          productList: [
            {
              id: '384817294129369088',
              name: '部门信息管理服务',
              code: 'deptInfoMgmt.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '382227834682347520',
              name: '机构信息管理服务',
              code: 'corpInfoMgmt.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '386150921882701824',
              name: '管理后台接口服务',
              code: 'adminDashboard.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '394936509381349376',
              name: '药师审方服务',
              code: 'pharmacist.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '394958762118615040',
              name: '药店业务',
              code: 'pharmacy.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '399992033516851200',
              name: '患者建档',
              code: 'patientCreateArchive.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '389512229080403968',
              name: '在线续方',
              code: 'prescriptionExtension.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '382228709031153664',
              name: '排班服务',
              code: 'schedule.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            }
          ],
          departmentInfoTreeList: null
        },
        {
          id: '404753672917094400',
          parentId: '401379511347843072',
          hisDepartmentCode: '256',
          stdDepartmentCode: null,
          departmentName: '测试二',
          createBy: 'Stephen',
          createAt: '2019-12-18 19:07:41',
          deleteAt: null,
          isDeleted: false,
          productList: [
            {
              id: '389512229080403968',
              name: '在线续方',
              code: 'prescriptionExtension.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '384817294129369088',
              name: '部门信息管理服务',
              code: 'deptInfoMgmt.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '382228709031153664',
              name: '排班服务',
              code: 'schedule.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '399992033516851200',
              name: '患者建档',
              code: 'patientCreateArchive.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            }
          ],
          departmentInfoTreeList: null
        }
      ]
    },
    {
      id: '398847442650533888',
      parentId: null,
      hisDepartmentCode: '001',
      stdDepartmentCode: null,
      departmentName: '内科',
      createBy: 'Stephen',
      createAt: '2019-12-02 11:58:26',
      deleteAt: null,
      isDeleted: false,
      productList: [],
      departmentInfoTreeList: [
        {
          id: '382240972400103424',
          parentId: '398847442650533888',
          hisDepartmentCode: '836239',
          stdDepartmentCode: null,
          departmentName: '内分泌',
          createBy: null,
          createAt: '2019-10-17 16:10:15',
          deleteAt: null,
          isDeleted: false,
          productList: [
            {
              id: '399992033516851200',
              name: '患者建档',
              code: 'patientCreateArchive.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '389512229080403968',
              name: '在线续方',
              code: 'prescriptionExtension.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '382228709031153664',
              name: '排班服务',
              code: 'schedule.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '384817294129369088',
              name: '部门信息管理服务',
              code: 'deptInfoMgmt.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            }
          ],
          departmentInfoTreeList: null
        },
        {
          id: '398847302950850560',
          parentId: '398847442650533888',
          hisDepartmentCode: '836311',
          stdDepartmentCode: null,
          departmentName: '防治科',
          createBy: 'Stephen',
          createAt: '2019-12-02 11:57:53',
          deleteAt: null,
          isDeleted: false,
          productList: [
            {
              id: '399992033516851200',
              name: '患者建档',
              code: 'patientCreateArchive.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '382228709031153664',
              name: '排班服务',
              code: 'schedule.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '384817294129369088',
              name: '部门信息管理服务',
              code: 'deptInfoMgmt.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '389512229080403968',
              name: '在线续方',
              code: 'prescriptionExtension.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            }
          ],
          departmentInfoTreeList: null
        },
        {
          id: '398847184289796096',
          parentId: '398847442650533888',
          hisDepartmentCode: '836416',
          stdDepartmentCode: null,
          departmentName: '心血管内科',
          createBy: 'Stephen',
          createAt: '2019-12-02 11:57:25',
          deleteAt: null,
          isDeleted: false,
          productList: [
            {
              id: '384817294129369088',
              name: '部门信息管理服务',
              code: 'deptInfoMgmt.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '382228709031153664',
              name: '排班服务',
              code: 'schedule.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '389512229080403968',
              name: '在线续方',
              code: 'prescriptionExtension.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            },
            {
              id: '399992033516851200',
              name: '患者建档',
              code: 'patientCreateArchive.svc',
              type: null,
              createAt: null,
              createBy: null,
              deleteAt: null,
              isDeleted: null
            }
          ],
          departmentInfoTreeList: null
        }
      ]
    },
    {
      id: '395208706947682304',
      parentId: '',
      hisDepartmentCode: 'yaoshibu',
      stdDepartmentCode: null,
      departmentName: '药师部',
      createBy: 'Stephen',
      createAt: '2019-11-22 10:59:24',
      deleteAt: null,
      isDeleted: false,
      productList: [
        {
          id: '384817294129369088',
          name: '部门信息管理服务',
          code: 'deptInfoMgmt.svc',
          type: null,
          createAt: null,
          createBy: null,
          deleteAt: null,
          isDeleted: null
        },
        {
          id: '394936509381349376',
          name: '药师审方服务',
          code: 'pharmacist.svc',
          type: null,
          createAt: null,
          createBy: null,
          deleteAt: null,
          isDeleted: null
        }
      ],
      departmentInfoTreeList: null
    }
  ]

  return builder(result)
}

const privilegeList = options => {
  const result = [
    {
      id: '399992035244904448',
      productIdFk: '399992033516851200',
      name: '档案创建',
      code: 'patientArchiveCreator',
      createAt: '2019-12-05 15:46:38',
      createBy: 'System',
      deleteAt: null,
      isDeleted: false
    },
    {
      id: '399992035651751936',
      productIdFk: '399992033516851200',
      name: '档案确认',
      code: 'patientArchiveReviewer',
      createAt: '2019-12-05 15:46:38',
      createBy: 'System',
      deleteAt: null,
      isDeleted: false
    },
    {
      id: '384404699002048513',
      productIdFk: '389512229080403968',
      name: '续方医生',
      code: 'scheduleResource',
      createAt: '2019-11-01 09:16:46',
      createBy: 'System',
      deleteAt: null,
      isDeleted: false
    },
    {
      id: '382228710662737920',
      productIdFk: '382228709031153664',
      name: '科室排班管理',
      code: 'departmentScheduleAdmin',
      createAt: '2019-10-17 15:21:32',
      createBy: 'System',
      deleteAt: null,
      isDeleted: false
    },
    {
      id: '382228710868258816',
      productIdFk: '382228709031153664',
      name: '科室排班审核',
      code: 'departmentScheduleApprover',
      createAt: '2019-10-17 15:21:32',
      createBy: 'System',
      deleteAt: null,
      isDeleted: false
    },
    {
      id: '384817294179700736',
      productIdFk: '384817294129369088',
      name: '角色信息管理',
      code: 'roleAdmin',
      createAt: '2019-10-24 18:47:38',
      createBy: 'System',
      deleteAt: null,
      isDeleted: false
    },
    {
      id: '384817294213255168',
      productIdFk: '384817294129369088',
      name: '部门员工信息管理',
      code: 'departmentStaffInfoAdmin',
      createAt: '2019-10-24 18:47:38',
      createBy: 'System',
      deleteAt: null,
      isDeleted: false
    }
  ]

  return builder(result)
}
const privilegeCreate = options => {
  return builder({}, '操作成功')
}
const privilegeDelete = options => {
  return builder({}, '操作成功')
}

const rolePage = options => {
  const result = [
    {
      id: '384805596664303616',
      name: '部门管理员',
      departmentInfoIdFk: '382240972400103424',
      createBy: null,
      createAt: null,
      deleteAt: null,
      isDeleted: null,
      firstDepartment: {
        id: '398847442650533888',
        parentId: null,
        hisDepartmentCode: '001',
        stdDepartmentCode: null,
        departmentName: '内科',
        createBy: 'Stephen',
        createAt: '2019-12-02 11:58:26',
        deleteAt: null,
        isDeleted: false
      },
      secondDepartment: {
        id: '382240972400103424',
        parentId: '398847442650533888',
        hisDepartmentCode: '836239',
        stdDepartmentCode: null,
        departmentName: '内分泌',
        createBy: null,
        createAt: '2019-10-17 16:10:15',
        deleteAt: null,
        isDeleted: false
      },
      privilegeList: [
        {
          id: '382228710868258816',
          productIdFk: '382228709031153664',
          name: '科室排班审核',
          code: 'departmentScheduleApprover',
          createAt: '2019-10-17 15:21:32',
          createBy: 'System',
          deleteAt: null,
          isDeleted: false
        },
        {
          id: '382228710662737920',
          productIdFk: '382228709031153664',
          name: '科室排班管理',
          code: 'departmentScheduleAdmin',
          createAt: '2019-10-17 15:21:32',
          createBy: 'System',
          deleteAt: null,
          isDeleted: false
        },
        {
          id: '384817294213255168',
          productIdFk: '384817294129369088',
          name: '部门员工信息管理',
          code: 'departmentStaffInfoAdmin',
          createAt: '2019-10-24 18:47:38',
          createBy: 'System',
          deleteAt: null,
          isDeleted: false
        },
        {
          id: '384817294179700736',
          productIdFk: '384817294129369088',
          name: '角色信息管理',
          code: 'roleAdmin',
          createAt: '2019-10-24 18:47:38',
          createBy: 'System',
          deleteAt: null,
          isDeleted: false
        }
      ]
    },
    {
      id: '384806522649186304',
      name: '排班人员',
      departmentInfoIdFk: '382240972400103424',
      createBy: null,
      createAt: null,
      deleteAt: null,
      isDeleted: null,
      firstDepartment: {
        id: '398847442650533888',
        parentId: null,
        hisDepartmentCode: '001',
        stdDepartmentCode: null,
        departmentName: '内科',
        createBy: 'Stephen',
        createAt: '2019-12-02 11:58:26',
        deleteAt: null,
        isDeleted: false
      },
      secondDepartment: {
        id: '382240972400103424',
        parentId: '398847442650533888',
        hisDepartmentCode: '836239',
        stdDepartmentCode: null,
        departmentName: '内分泌',
        createBy: null,
        createAt: '2019-10-17 16:10:15',
        deleteAt: null,
        isDeleted: false
      },
      privilegeList: [
        {
          id: '382228710662737920',
          productIdFk: '382228709031153664',
          name: '科室排班管理',
          code: 'departmentScheduleAdmin',
          createAt: '2019-10-17 15:21:32',
          createBy: 'System',
          deleteAt: null,
          isDeleted: false
        }
      ]
    }
  ]

  return builder({
    pageSize: 10,
    pageNo: 1,
    totalCount: result.length,
    totalPage: result.length / 10,
    data: result
  })
}
const roleList = options => {
  const result = [
    {
      roleName: '角色1',
      parentDepartmentName: '一级科室1',
      childDepartmentName: '二级科室1',
      roles: ['在线续方', '图文问诊'],
      status: 'Normal'
    },
    {
      roleName: '角色2',
      parentDepartmentName: '一级科室2',
      childDepartmentName: '-',
      roles: ['在线续方', '图文问诊'],
      status: 'Abnormal'
    },
    {
      roleName: '角色3',
      parentDepartmentName: '一级科室3',
      childDepartmentName: '二级科室3',
      roles: ['在线续方', '图文问诊'],
      status: 'Normal'
    },
    {
      roleName: '角色4',
      parentDepartmentName: '一级科室4',
      childDepartmentName: '二级科室4',
      roles: ['在线续方', '图文问诊'],
      status: 'Normal'
    }
  ]

  return builder({
    pageSize: 10,
    pageNo: 1,
    totalCount: result.length,
    totalPage: result.length / 10,
    data: result
  })
}
const roleCreate = options => {
  return builder({}, '操作成功')
}
const roleDelete = options => {
  return builder({}, '操作成功')
}
const roleUpdate = options => {
  return builder({}, '操作成功')
}

Mock.mock(/\/department\/tree/, 'post', departmentTree)
Mock.mock(/\/department\/role\/page/, 'post', rolePage)
Mock.mock(/\/department\/role\/list/, 'post', roleList)
Mock.mock(/\/department\/privilege\/list/, 'post', privilegeList)
Mock.mock(/\/department\/role\/privilege\/create/, 'post', privilegeCreate)
Mock.mock(/\/department\/role\/privilege\/delete/, 'post', privilegeDelete)
Mock.mock(/\/department\/role\/create/, 'post', roleCreate)
Mock.mock(/\/department\/role\/delete/, 'post', roleDelete)
Mock.mock(/\/department\/role\/update/, 'post', roleUpdate)
