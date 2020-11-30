# Time库

## 获取时间函数

### time()

获取从1970年1月1日0点0分至今的时间段,单位为秒,浮点是返回.  
eg:

>1580977461.1635454  

### ctime()

返回一个可以由程序员读懂的字符串  
eg:

>Thu Feb  6 16:24:21 2020

### gmtime

返回一个可以由其它程序调用的结构体.  
eg:

>time.struct_time(tm_year=2020, tm_mon=2, tm_mday=6, tm_hour=8, tm_min=24, tm_sec=22, tm_wday=3, tm_yday=37, tm_isdst=0)  

