弹幕数据 {}[];


组件 
 - 初始化
 - 挂载
 - 合并
 - 卸载


弹幕流

用发布订阅来整理一下

- 用户1号发送弹幕 哈哈哈
  - 哈哈哈(1)
- 用户2号发送哈哈哈
  - 哈哈哈(1,2)
- 用户3号发送哈哈哈哈
  - 哈哈哈(1,2) | 哈哈哈哈(3)
- 过了${单个用户超时时间}
  - 哈哈哈(2) | 哈哈哈哈(3)