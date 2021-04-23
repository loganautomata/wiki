# Python基础篇

## 关键字

### True

布尔值一

### False

布尔值零

### None

表示该值是一个空对象，为空不为零。  

### as

`import turtle as t`取别名。  

### assert

`assert condition`condition为False时，抛出AssertError并且包含错误信息。  

### break

跳出循环

### continue

结束本轮循环，继续下一轮的循环。  

### class

类

### def

函数

### return

返回值，当函数没有显式return，默认返回None值。  

### del

删除变量而不删除数据（删除指针）。  

### and

与

### or

或

### not

非

### if

`if conditionIf`conditionIf为true时，执行后续语句。  

### elif

`elif conditionElif`conditionIf为false且conditionElif为true时，执行后续语句。  

### else

之前的判断条件都为false时执行后续语句。  

eg：

```Python
if expression1:
    statement(s)
elif expression2:
    statement(s)
elif expression3:
    statement(s)
else:
    statement(s)
```

### try

try中语句必须执行，其中的语句是否抛出异常作为判断标准。  

### except

try中的语句出现异常时执行except中的语句。  

### finally

finally中语句不管是否抛出异常都会执行。  

eg:  

```Python
try:
    clause
except:
    clause
else:
    clause
finally:
    clause
```

### raise

引发异常，单独一个 raise。该语句引发当前上下文中捕获的异常（比如在 except 块中），或默认引发 RuntimeError 异常。raise [exceptionName [(reason)]]引发指定类型的异常，同时附带异常的描述信息。  

### while

满足条件时循环。  

### for

循环。  

### in

判断数据是否在列表，数组等中。  

```Python
for l in list0
```

### import

引入库。  

### from

仅引入库中某一类。  

### global

全局变量。  

###　nonlocal

非局部变量，指向最近的嵌套作用域，可读但不可写。  

```Python
def a():
    i = 0
    def b():
        nonlocal i
        i=i+1
    b()
```

### is

判断两个变量（指针）是否指向同一个对象。  

### pass

空语句，占位，保证程序结构完整性何可读性。  

### with

with 语句适用于对资源进行访问的场合，确保不管使用过程中是否发生异常都会执行必要的“清理”操作，释放资源。  

```Python
with open("１.txt") as fileName:
```

### yeid

返回生成器

### lambda

匿名函数

## 标识符

命名规则：数字，下划线，英文字符，中文字符等皆可命名，但首字符不可为数字，不与关键字相同，且大小写敏感。  
