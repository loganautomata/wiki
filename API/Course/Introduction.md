# 文档说明

## 服务器API地址

`https://api.loganren.xyz/course`

## 版本号

`v0.5`

## 调用接口说明

- request请求必须是JSON格式.
- 所有API调用均可跨域访问.
- 调用需要用户权限的接口必须在请求头Authorzation字段中加入access_token作为权限验证. 为了减少请求次数以及方便前端编码, 未使用refresh_token作为刷新access_token的方式, 使用access_token到期刷新机制. 每个access_token的存活周期为20min, 到期失效, 但过期后20min中内为刷新时间, 服务器中收到到期Token后会在响应头Authorzation字段中加入新的access_token返回给前端. 每个过期access_token仅有一次更新机会.