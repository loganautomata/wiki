# Python基础篇

## Number

定义：包含int、float、bool、complex数据类型。  

```python
a + b
a - b
a * b
a / b #结果默认为浮点数
a % b
a // b #截尾取得一个整数
a ** b #乘方
```

PS：复数由实数部分和虚数部分构成，可以用a + bj,或者complex(a,b)表示， 复数的实部a和虚部b都是浮点型。  

## String

定义：Python中的字符串用单引号 ' 或双引号 " 或三单引号 ''' 括起来，同时使用反斜杠 \ 转义特殊字符。  

1.索引格式：变量[]。  
2.截取格式：变量[头下标:尾下标]（头下标缺失表示至开头，尾下标缺失表示至结尾）。  
3.从前往后数第一个数是0，从后往前数第一个数是-1。  
4.字符串前加上r或者R取消 \ 符号的转义。  
5.可使用 + 符号连接字符串，也可以使用 * 符号重复字符串eg：`str * 2`。  

PS：python中的字符串无法改变。  

### 字符串格式控制

定义：`"Hello {0} {1}".format("Logan", "Ren")`

|填充|对齐|宽度|
|:---:|:---:|:---:|
|用于填充的单个字符|左对齐 < ，右对齐 > ，居中对齐 ^ |输出宽度|

eg：`{0:*^10}`

|分隔符|精度|类型|
|:---:|:---:|:---:|
|千位分隔符 , |浮点数小数精度或字符串最大输出长度 . |b c d o x X e E f %|

b：二进制  
c：Unicode字符  
d：十进制  
0：八进制  
x：小写十六进制  
X：大写十六进制  
e：科学计数法e  
E：科学计数法E  
f：常规表示  
%：百分号表示  

eg：`{0:,.2f}`

## Tuple

定义：元组写在小括号 () 里，元素之间用逗号隔开。  

列表List与Stirng的索引，截取等都相同。  

PS：元组中只有一个元素时须在其后加上 , 符号，而空元组则不需要 , 符号eg；`tuple = ()`。元组中元素不可以改变。  

## List

定义：列表是写在方括号 [] 之间、用逗号分隔开的元素列表。  

列表List与Stirng的索引，截取等都相同，不同的主要有：  
1.Python 列表截取可以接收第三个参数，参数作用是截取的步长（每隔多少个字符截取一个元素）eg：list[ : : -1]，此时可以翻转字符串。  

PS：列表中元素的类型可以不相同，它支持数字，字符串甚至可以嵌套。列表中元素可以改变。  

## Set

定义：集合写在大括号 {} 里，元素之间用逗号隔开。基本功能是进行成员关系测试和删除重复元素。  

```python
a | b #并集
a & b #交集
a - b #差集
a ^ b #对称差
```

PS：创建一个空集合必须用 set() 而不是 { }，其中元素可以改变。  

## Dictionary

定义：字典写在大括号 {} 里，元素之间用逗号隔开，每个元素由键(key)和值(value)组成，key和value由 : 隔开。字典是无序的对象集合，字典当中的元素是通过键来存取的，健(key)必须为不可变类型（string，number，tuple）。  

PS：直接用 {} 构建空字典，通过`dictionary[key] = value`添加新的键值对。  

## 数据类型转换

|函数名|转换类型|
|:---:|:---:|
|int(x)|number to int|
|int(x, base)|string to int(base为string的进制类型)|
|float(x)|number or string to float|
|complex(r, i)|number to complex|
|complex(x)|stirng to complex|
|str(x)|object to string|
|repr(x)|object to expression|
|eval(x)|expression to object|
|tuple(x)|iterable(eg : list) to tuple|
|list(x)|tuple or string to list|
|set(x)|iterable to set (ps: 重复元素会被删除)|
|dict(x)|iterable or **kwarg... to dictionary|
|frozenset(x)|iterable to set(Invariable)|
|chr(i)|number(ASCII) to character|
|ord(c)|character to number|
|hex(x)|base 10 to base 16 string|
|oct(x)|base 10 to base 8 string|

## 数值运算函数

|函数名|描述|
|:---:|:---:|
|abs(x)|绝对值，x的绝对值|
|divmod(x, y)|商余，(x//y, x%y)，同时返回商和余数|
|pow(x, y[, z])|幂，(x**y%z)|
|round(x[, d])|四舍五入，保留d位小数，默认d为0|
|max($x_1, x_2 ... x_n$)|最大值|
|min($x_1, x_2 ... x_n$)|最小值|

## 字符串处理方法

|方法名|描述|
|:---:|:---:|
|str.lower()|返回全小写字符串副本|
|str.upper()|返回全大写的字符串副本|
|str.split(sep=None)|返回由sep分割后的list副本|
|str.count(sub)|返回sub子字符串在str中的出现次数|
|str.replace(old, new)|返回由new字符串替代old后生成的string副本|
|str.center(width[, fillchar])|返回根据width居中，根据fillchar填充生成的string副本|
|str.strip(chars)|返回去掉左右侧chars中字符生成的新string副本|
|str.join(iter)|返回在每个元素后加上iter后生成的新副本（最后一个元素除外，用以split）|
