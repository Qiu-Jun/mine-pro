/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 17:11:49
 * @LastEditTime: 2024-06-05 17:12:04
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\constants\error-code.constant.ts
 */
export enum ErrorEnum {
  DEFAULT = '0:未知错误',
  SERVER_ERROR = '500:服务繁忙，请稍后再试',

  SYSTEM_USER_EXISTS = '1001:系统用户已存在',
  INVALID_VERIFICATION_CODE = '1002:验证码填写有误',
  INVALID_USERNAME_PASSWORD = '1003:用户名密码有误',
  NODE_ROUTE_EXISTS = '1004:节点路由已存在',
  PERMISSION_REQUIRES_PARENT = '1005:权限必须包含父节点',
  ILLEGAL_OPERATION_DIRECTORY_PARENT = '1006:非法操作：该节点仅支持目录类型父节点',
  ILLEGAL_OPERATION_CANNOT_CONVERT_NODE_TYPE = '1007:非法操作：节点类型无法直接转换',
  ROLE_HAS_ASSOCIATED_USERS = '1008:该角色存在关联用户，请先删除关联用户',
  DEPARTMENT_HAS_ASSOCIATED_USERS = '1009:该部门存在关联用户，请先删除关联用户',
  DEPARTMENT_HAS_ASSOCIATED_ROLES = '1010:该部门存在关联角色，请先删除关联角色',
  PASSWORD_MISMATCH = '1011:旧密码与原密码不一致',
  LOGOUT_OWN_SESSION = '1012:如想下线自身可右上角退出',
  NOT_ALLOWED_TO_LOGOUT_USER = '1013:不允许下线该用户',
  PARENT_MENU_NOT_FOUND = '1014:父级菜单不存在',
  DEPARTMENT_HAS_CHILD_DEPARTMENTS = '1015:该部门存在子部门，请先删除子部门',
  SYSTEM_BUILTIN_FUNCTION_NOT_ALLOWED = '1016:系统内置功能不允许操作',
  USER_NOT_FOUND = '1017:用户不存在',
  UNABLE_TO_FIND_DEPARTMENT_FOR_USER = '1018:无法查找当前用户所属部门',
  DEPARTMENT_NOT_FOUND = '1019:部门不存在',
  DICT_NAME_EXISTS = '1020: 已存在相同名称的字典',
  PARAMETER_CONFIG_KEY_EXISTS = '1021:参数配置键值对已存在',
  DEFAULT_ROLE_NOT_FOUND = '1022:所分配的默认角色不存在',

  INVALID_LOGIN = '1101:登录无效，请重新登录',
  NO_PERMISSION = '1102:无权限访问',
  ONLY_ADMIN_CAN_LOGIN = '1103:不是管理员，无法登录',
  REQUEST_INVALIDATED = '1104:当前请求已失效',
  ACCOUNT_LOGGED_IN_ELSEWHERE = '1105:您的账号已在其他地方登录',
  GUEST_ACCOUNT_RESTRICTED_OPERATION = '1106:游客账号不允许操作',
  REQUESTED_RESOURCE_NOT_FOUND = '1107:所请求的资源不存在',

  TOO_MANY_REQUESTS = '1201:请求频率过快，请一分钟后再试',
  MAXIMUM_FIVE_VERIFICATION_CODES_PER_DAY = '1202:一天最多发送5条验证码',
  VERIFICATION_CODE_SEND_FAILED = '1203:验证码发送失败',

  INSECURE_MISSION = '1301:不安全的任务，确保执行的加入@Mission注解',
  EXECUTED_MISSION_NOT_FOUND = '1302:所执行的任务不存在',
  MISSION_EXECUTION_FAILED = '1303:任务执行失败',
  MISSION_NOT_FOUND = '1304:任务不存在',

  // OSS相关
  OSS_FILE_OR_DIR_EXIST = '1401:当前创建的文件或目录已存在',
  OSS_NO_OPERATION_REQUIRED = '1402:无需操作',
  OSS_EXCEE_MAXIMUM_QUANTITY = '1403:已超出支持的最大处理数量'
}
