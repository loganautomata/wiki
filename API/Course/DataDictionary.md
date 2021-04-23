# 数据字典

## 用户表

| 字段            | 类型            | 空   | 默认 | 注释                   |
| :-------------- | :-------------- | :--- | ---- | ---------------------- |
| id              | bigint unsigned | 否   |      | 主键                   |
| username        | varchar(13)     | 否   |      | 唯一索引, 用户名       |
| password        | char(60)        | 否   |      | 密码                   |
| status          | tinyint         | 否   | 0    | 用户状态 0:正常 1:异常 |
| create_time     | int unsigned    | 否   |      | 创建账号时间           |
| last_login_time | int unsigned    | 否   |      | 上次登录时间           |
| last_login_ipv4 | int unsigned    | 否   |      | 上次登录IP             |

## 课程表

| 字段        | 类型            | 空   | 默认 | 注释             |
| :---------- | :-------------- | :--- | ---- | ---------------- |
| id          | bigint unsigned | 否   |      | 主键             |
| cid         | bigint unsigned | 否   |      | 唯一索引, 课程ID |
| coursename  | varchar(23)     | 否   |      | 课程名           |
| teachername | varchar(13)     | 否   |      | 教师名           |
| score       | int             | 否   |      | 课程评分         |

## 评分表

| 字段        | 类型            | 空   | 默认 | 注释       |
| :---------- | :-------------- | :--- | ---- | ---------- |
| id          | bigint unsigned | 否   |      | 主键       |
| user_id     | bigint unsigned | 否   |      | 评分课程ID |
| course_id   | bigint unsigned | 否   |      | 评分用户ID |
| score       | int             | 否   |      | 评分       |
| create_time | int unsigned    | 否   |      | 评分时间   |

## 评论表

| 字段        | 类型            | 空   | 默认 | 注释       |
| :---------- | :-------------- | :--- | ---- | ---------- |
| id          | bigint unsigned | 否   |      | 主键       |
| user_id     | bigint unsigned | 否   |      | 评论课程ID |
| course_id   | bigint unsigned | 否   |      | 评论用户ID |
| comments    | text            | 否   |      | 评论       |
| create_time | int unsigned    | 否   |      | 评论时间   |