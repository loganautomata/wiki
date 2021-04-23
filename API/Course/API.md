# API接口

## 用户登录接口

### 请求URL

- `/token`

### 请求方式

- POST

### 参数

| 参数名   | 必选 | 类型   | 说明   |
| -------- | ---- | ------ | ------ |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |

### 返回示例

#### 成功实例

```json
{
    "code": 10,
    "message": "登录成功",
    "data": {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmxvZ2FucmVuLnh5eiIsInN1YiI6Imh0dHBzOlwvXC90ZXN0LmxvZ2FucmVuLnh5eiIsImlhdCI6MTYwMzU1MDIzOCwiZXhwIjoxNjAzNTUxNDM4LCJuYmYiOjE2MDM1NTAyNDEsImRhdGEiOiJOaWVyIn0.fspdMjP5dn7FiECDHVsDeafQwrtwc6Xd-e07taLDn0EpqSdQMM1TALmBkbebKpaNPou1At-rN6hXPj7IyvQp-4zOfDfKB7wIeECvoeasWgDb7LB5gPBm_kjuHxzo7jptQo7TAqp0_5dCjxzIX61-DQ5nWoKTuZ7XL1cOQC58XTJUFPbXP4J4NvixwVMPOtbKOSOxqIlFETjRDov8kmkXOfDvftBwf8k1KRPkGjWqx2webKUqnnOa0E8zy8_ge_5RuSDTGNe9Wer62rtn8udMCCe5Gll_-U7CV1RfTyKeDFS0OCjd-xVlwt8P6oqXdrJjcvQ06Y_z83I8083mL-f33Q",
        "last_login_ipv4": "香港中西區香港",
        "last_login_time": "2020-10-24 21:11:54"
    }
}
```

#### 失败实例

```json
{
    "code": 11,
    "message": "密码或用户名错误",
    "data": false
}
```

### 返回参数说明

| 参数名          | 类型   | 说明                 |
| :-------------- | :----- | -------------------- |
| last_login_ip   | string | 上次登录的IP地址归属 |
| last_login_time | stirng | 上次登录时间归属     |

### 备注

防止他人窃取Token后登录, 用户异地登录后无权限修改, 删除. 需再次登录重新输入密码和用户名才可执行操作.

## 用户退出接口

### 请求URL

- `/token/{username}`

### 请求方式

- DELETE

### 参数

| 参数名 | 必选 | 类型 | 说明 |
| ------ | ---- | ---- | ---- |
| N/A    | N/A  | N/A  | N/A  |

### 返回示例

#### 成功实例

```json
{
    "code": 207,
    "message": "退出成功",
    "data": true
}
```

#### 失败实例

```json
{
    "code": 400,
    "message": "Token过期",
    "data": false
}
```

### 返回参数说明

| 参数名 | 类型 | 说明 |
| :----- | :--- | ---- |
| N/A    | N/A  | N/A  |

### 备注

需要在请求头中附上Token.

## 用户注册接口

### 请求URL

- `/user`

### 请求方式

- POST

### 参数

| 参数名     | 必选 | 类型   | 说明     |
| ---------- | ---- | ------ | -------- |
| username   | 是   | string | 用户名   |
| password   | 是   | string | 密码     |
| passwordRe | 是   | string | 重复密码 |

### 返回示例

#### 成功实例

```json
{
    "code": 201,
    "message": "注册成功",
    "data": true
}
```

#### 失败实例

```json
{
    "code": 400,
    "message": "用户名重复",
    "data": false
}
```

### 返回参数说明

| 参数名 | 类型 | 说明 |
| :----- | :--- | ---- |
| N/A    | N/A  | N/A  |

### 备注

用户名和密码格式是否正确由后端判断, 不符合时会返回不同的错误信息.

## 用户删除接口

### 请求URL

- `/user/{username}`

### 请求方式

- DELETE

### 参数

| 参数名 | 必选 | 类型 | 说明 |
| ------ | ---- | ---- | ---- |
| N/A    | N/A  | N/A  | N/A  |

### 返回示例

#### 成功实例

```json
{
    "code": 207,
    "message": "注销成功",
    "data": true
}
```

#### 失败实例

```json
{
    "code": 403,
    "message": "用户名与Token不对应",
    "data": false
}
```

### 返回参数说明

| 参数名 | 类型 | 说明 |
| :----- | :--- | ---- |
| N/A    | N/A  | N/A  |

### 备注

需要在请求头中附上用户的Token, 此操作非软删除不可恢复.

## 用户信息更新接口

### 请求URL

- `/user/{username}`

### 请求方式

- PUT

### 参数

|   参数名   |  必选  | 类型   | 说明     |
| :--------: | :----: | ------ | -------- |
|  username  | 非必选 | string | 用户名   |
|  password  | 非必选 | string | 密码     |
| passwordRe | 非必选 | string | 重复密码 |

### 返回示例

#### 成功实例

```json
{
    "code": 200,
    "message": "更新成功",
    "data": true
}
```

#### 失败实例

```json
{
    "code": 403,
    "message": "用户名与Token不对应",
    "data": false
}
```

### 返回参数说明

| 参数名 | 类型 | 说明 |
| :----: | :--- | ---- |
|  N/A   | N/A  | N/A  |

### 备注

需要在请求头中附上用户的Token, 更新密码需要password和passwordRe参数, 仍然由服务端判断格式是否正确.

## 用户信息获取接口

### 请求URL

- `/user/{username}`

### 请求方式

- GET

### 参数

| 参数名 | 必选 | 类型 | 说明 |
| :----: | :--: | :--: | :--: |
|  N/A   | N/A  | N/A  | N/A  |

### 返回示例

#### 成功实例

```json
{
    "code": 200,
    "message": "用户信息",
    "data": {
        "username": "Nier",
        "status": 0,
        "create_time": "2020-10-24 21:02:59",
        "last_login_time": "2020-10-25 12:46:03",
        "last_login_ipv4": "34.92.211.163"
    }
}
```

#### 失败实例

```json
{
    "code": 403,
    "message": "用户名与Token不对应",
    "data": false
}
```

### 返回参数说明

|     参数名      |  类型   |         说明         |
| :-------------: | :-----: | :------------------: |
|    username     | string  |        用户名        |
|     status      | tinyint |      用户状态码      |
|   create_time   | stirng  |     用户创建时间     |
|  last_login_ip  | string  | 上次登录的IP地址归属 |
| last_login_time | stirng  |   上次登录时间归属   |

### 备注

需要在请求头中附上用户的Token, 用户状态码0表示正常1表示异常登录处于封禁状态.

## 分页课程信息查询接口

### 请求URL

- `/course`

### 请求方式

- GET

### 参数

|   参数名   | 必选 | 类型 |     说明     |
| :--------: | :--: | :--: | :----------: |
| pageNumber |  是  | int  |     页码     |
|  pageSize  |  是  | int  | 每页数据行数 |

### 返回示例

#### 成功实例

```json
{
    "code": 200,
    "message": "第3页课程信息",
    "data": {
        "count": 13,
        "pageInfo": [
            {
                "cid": 6,
                "coursename": "Assassin's Creed Unity",
                "teachername": "Arno",
                "score": 100
            },
            {
                "cid": 7,
                "coursename": "Nier Automata",
                "teachername": "2B,A2,9s ",
                "score": 100
            },
            {
                "cid": 8,
                "coursename": "Bloodborne",
                "teachername": "Doll",
                "score": 101
            }
        ]
    }
}
```

#### 失败实例

```json
{
    "code": 200,
    "message": "第10页课程信息",
    "data": {
        "count": 13,
        "pageInfo": []
    }
}
```

### 返回参数说明

|   参数名    |  类型  |            说明             |
| :---------: | :----: | :-------------------------: |
|    count    |  int   |          课程总数           |
|     cid     |  int   |           课程ID            |
| coursename  | stirng |           课程名            |
| teachername | string | 教师名, 多个教师以 ',' 隔开 |
|    score    |  int   |          课程评分           |

### 备注

如果要获取所有课程信息, 不在请求头中添加任何参数即可.

## 课程信息获取接口

### 请求URL

- `/course/{cid}`

### 请求方式

- GET

### 参数

| 参数名 | 必选 | 类型 | 说明 |
| :----: | :--: | :--: | :--: |
|  N/A   | N/A  | N/A  | N/A  |

### 返回示例

#### 成功实例

```json
{
    "code": 200,
    "message": "课程信息",
    "data": {
        "cid": 0,
        "coursename": "God of War",
        "teachername": "Kratos",
        "score": 100
    }
}
```

#### 失败实例

```json
{
    "code": 404,
    "message": "课程不存在",
    "data": false
}
```

### 返回参数说明

|   参数名    |  类型  |            说明             |
| :---------: | :----: | :-------------------------: |
|     cid     |  int   |           课程ID            |
| coursename  | stirng |           课程名            |
| teachername | string | 教师名, 多个教师以 ',' 隔开 |
|    score    |  int   |          课程评分           |

### 备注

无.

## 课程模糊查询接口

### 请求URL

- `/course/search`

### 请求方式

- GET

### 参数

| 参数名  | 必选 |  类型  |    说明    |
| :-----: | :--: | :----: | :--------: |
| keyword |  是  | string | 搜索关键字 |

### 返回示例

#### 成功实例

```json
{
    "code": 200,
    "message": "搜索信息",
    "data": [
        {
            "cid": 0,
            "coursename": "God of War",
            "teachername": "Kratos",
            "score": 100
        },
        {
            "cid": 5,
            "coursename": "The Witcher 3",
            "teachername": "Geralt",
            "score": 100
        }
    ]
}
```

#### 失败实例

```json
{
    "code": 200,
    "message": "搜索信息",
    "data": []
}
```

### 返回参数说明

|   参数名    |  类型  |            说明             |
| :---------: | :----: | :-------------------------: |
|     cid     |  int   |           课程ID            |
| coursename  | stirng |           课程名            |
| teachername | string | 教师名, 多个教师以 ',' 隔开 |
|    score    |  int   |          课程评分           |

### 备注

无.

## 用户评分接口

### 请求URL

- `/score`

### 请求方式

- POST

### 参数

|  参数名  | 必选 |  类型  |  说明  |
| :------: | :--: | :----: | :----: |
| username |  是  | string | 用户名 |
|   cid    |  是  |  int   | 课程ID |
|  score   |  是  |  int   |  评分  |

### 返回示例

#### 成功实例

```json
{
    "code": 200,
    "message": "评分成功",
    "data": true
}
```

#### 失败实例

```json
{
    "code": 400,
    "message": "非法参数",
    "data": false
}
```

### 返回参数说明

| 参数名 | 类型 | 说明 |
| :----: | :--- | ---- |
|  N/A   | N/A  | N/A  |

### 备注

参数放置在BODY中, 以JSON格式, 需要附带Token.

## 用户更改评分接口

### 请求URL

- `/score`

### 请求方式

- PUT

### 参数

|  参数名  | 必选 |  类型  |  说明  |
| :------: | :--: | :----: | :----: |
| username |  是  | string | 用户名 |
|   cid    |  是  |  int   | 课程ID |
|  score   |  是  |  int   |  评分  |

### 返回示例

#### 成功实例

```json
{
    "code": 200,
    "message": "评分成功",
    "data": true
}
```

#### 失败实例

```json
{
    "code": 404,
    "message": "该评分项不存在",
    "data": false
}
```

### 返回参数说明

| 参数名 | 类型 | 说明 |
| :----: | :--- | ---- |
|  N/A   | N/A  | N/A  |

### 备注

参数放置在BODY中, 以JSON格式, 需要附带Token.

## 用户评论接口

### 请求URL

- `/comment`

### 请求方式

- POST

### 参数

|  参数名  | 必选 |  类型  |  说明  |
| :------: | :--: | :----: | :----: |
| username |  是  | string | 用户名 |
|   cid    |  是  |  int   | 课程ID |
| comment  |  是  | string |  评论  |

### 返回示例

#### 成功实例

```json
{
    "code": 200,
    "message": "评论成功",
    "data": true
}
```

#### 失败实例

```json
{
    "code": 401,
    "message": "无Token",
    "data": false
}
```

### 返回参数说明

| 参数名 | 类型 | 说明 |
| :----: | :--- | ---- |
|  N/A   | N/A  | N/A  |

### 备注

参数放置在BODY中, 以JSON格式, 需要附带Token.

## 用户更新评论接口

### 请求URL

- `/comment`

### 请求方式

- PUT

### 参数

| 参数名  | 必选 |  类型  |  说明  |
| :-----: | :--: | :----: | :----: |
|  comid  |  是  | string | 评论ID |
| comment |  是  | string |  评论  |

### 返回示例

#### 成功实例

```json
{
    "code": 200,
    "message": "更新成功",
    "data": true
}
```

#### 失败实例

```json
{
    "code": 401,
    "message": "无Token",
    "data": false
}
```

### 返回参数说明

| 参数名 | 类型 | 说明 |
| :----: | :--- | ---- |
|  N/A   | N/A  | N/A  |

### 备注

参数放置在BODY中, 以JSON格式, 需要附带Token.

## 用户删除评论接口

### 请求URL

- `/comment`

### 请求方式

- DELETE

### 参数

| 参数名 | 必选 |  类型  |  说明  |
| :----: | :--: | :----: | :----: |
| comid  |  是  | string | 评论ID |

### 返回示例

#### 成功实例

```json
{
    "code": 200,
    "message": "删除成功",
    "data": true
}
```

#### 失败实例

```json
{
    "code": 404,
    "message": "该评论项不存在",
    "data": false
}
```

### 返回参数说明

| 参数名 | 类型 | 说明 |
| :----: | :--- | ---- |
|  N/A   | N/A  | N/A  |

### 备注

参数放置在BODY中, 以JSON格式, 需要附带Token.

## 获取课程评论接口

### 请求URL

- `/comment/{cid}`

### 请求方式

- GET

### 参数

| 参数名 | 必选 | 类型 | 说明 |
| :----: | :--: | :--: | :--: |
|  N/A   | N/A  | N/A  | N/A  |

### 返回示例

#### 成功实例

```json
{
    "code": 200,
    "message": "评论信息",
    "data": [
        {
            "comment": "战神天下第一",
            "create_time": "2020-12-20 21:57:46",
            "comid": "AF996EC88F19C36E4373BE8966DE091F"
        }
    ]
}
```

#### 失败实例

```json
{
    "code": 404,
    "message": "课程不存在",
    "data": false
}
```

### 返回参数说明

|   参数名    | 类型   | 说明     |
| :---------: | :----- | -------- |
|   comment   | string | 评论     |
| create_time | date   | 创建时间 |
|    comid    | string | 评论ID   |

### 备注

无.