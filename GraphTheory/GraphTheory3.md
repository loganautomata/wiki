# 图论

## 基本定义

无向树: 一个连通无回路的无向图.

有向树: 基图是树的有向图.

平凡树: 平凡图.

生成树: 生成子图为树.

> 生成树个数记为𝜏(G).

余树: 补为树.

根树: 平凡树或者有向树中有一个顶点的入度为0而其余顶点的入度均为1.

根子树: 根树的任一节点及其所有后代的导出子图.

家族树: 儿子, 父亲, 兄弟, 后代, 祖先.

有序树: 给相同层数的顶点标上次序的根树.

r叉树: 根树的每个分支点至多有r个儿子.

>正则(regular)r叉树: r叉树的每个分支点恰好有r个儿子.
>完全(complete)正则r叉树: 正则r叉树的每个树叶的高度均为树高.

左(右)子树: 2叉正则有序树的每个分支点的左右两个儿子导出的根子树.

森林: 每个连通分支都是树的无向图.

树叶: d(v)=1.

>任一n阶非平凡无向树至少有两片树叶.

分枝点: d(v)≥2.

树枝: 生成子图与原图共有的边.

弦: 原图独有的边.

树根: 根树入度为0的顶点.

内点: 根树中除树根以外的分支点.

顶点的层数: 从树根到顶点的路径长度.

树高: 顶点的最大层数.

基本回路: 由生成树的子集与一条弦的并集生成的回路. 

基本回路系统: 各个弦对应基本回路的集合. 

圈秩𝜉(G): |E|-|V|+1.

基本割集: 由弦集的子集和一根树枝的并集组成的割集.

基本割集系统: 各个树枝对应基本割集的集合.

割集秩: 基本割集的个数.

环路: 图中圈或若干个边不重的圈的并.

> 空集是环路.
> 圈和简单回路都是环路, 但环路不一定是回路.

环和: 边集做对称差运算, 定点集做并运算.

Ω: 图的各边导处子图的的集合.

> 包含空集.
>
> |Ω|=2^|E|^.

环路空间: 所有环路的集合.

断集: 原无向图的顶点集划分为两个子集, 断集中的边含于该图且该边两端分别连接两个子集中的顶点.

> 不要求极小性, 所以断集不一定是割集. 但割集一定是断集.

断集空间: 无向图中所有断集的导出子图和空集组成的集合.

根树的周游: 列出根树的所有顶点, 每个顶点恰好出现一次.

中序行遍: LDR.

前序行遍: DLR.

后序行遍: LRD.

通讯编码: 在通讯工作中，常用二进制数字0, 1组成的符号串(简称二元码)来表示数字、字母和汉字等.

不等长编码: 出现频率不同的码字用不同长度的编码.

> 可能出现码字互为前缀.

前缀码: 码字互相不为前缀的不等长编码.

> 前缀码与二叉树对应, 边代表0或1, 树叶对应一个前缀码.

最佳前缀码: 给定信号出现频率, 平均码字长度最短的前缀码.

平均码字长度: 码字长度乘以频率再求和(加权和).

带权二叉树: 每个树叶都指定实数权.

带权二叉树的权: 各片树叶的层数乘以它对应的实数权相加的和.

最优二叉树: 权最小的一个二叉树.

> 不唯一.

## 无向树的充分必要条件

1. 图中任二顶点之间存在唯一路径.
2. 图中无圈且|E|=|V|-1.
3. 图连通且|E|=|V|-1.
4. 图连通且每条边均为桥.
5. 图无圈, 但在任二不同顶点之间增加新边, 所得图含唯一的一个圈.

## 生成树的存在性定理

定理: 无向图具有生成树当且仅当该图是连通的.

推论: 

1. 若 |E| ≥ |V|-1, 则具有生成树.
2. 余树边数为 |E|-|V|+1.
3. 余树和原图中的圈的边集有交集.

## 生成树算法

### 破圈法

删去图中圈的任意一条边, 直到图中无圈为止.

## 定理补充

1. 非平凡树至少有2个树叶.

2. 生成树和一条弦的并集中包含一圈, 圈中只有一条边为弦其余皆为树枝, 且不同弦对应的圈不同.

3. 任意一条数枝都对应一个原图的割集, 该割集仅由该树枝与弦组成, 且不同树枝对应的割集不同.

## 基本割集算法

### 算法一

任意选择一树枝, 生成树除去该树枝后变为两新生成树, 基本割集由这两个新树的对应顶点相连的弦和树枝组成.

## 生成树个数算法

### 算法一

𝜏(G) = 𝜏(G-e) + 𝜏(G\e)

> e为任意非环边. 𝜏(G\e): G中含e的生成树个数

### 算法二

𝜏(K~n~) = n^n-2^

> n ≥ 2, K~n~为n阶标定完全图.

## 构造长度为n-2的序列

### 方法: 

Step1

> 选最小树叶, 与其在同一树枝上的一点为l~1~.

Step2

> 选最小树叶(不包含已选树叶), 与其在同一树枝上的点为l~2~.

Step

> ...

Step n-2

>选最小树叶(不包含已选树叶), 与其在同一树枝上的点为l~n-2~.

Step n-1

>(l~1~, l~2~ ... l~n-2~)即为序列.

## 构造K~n~的一颗生成树

### 方法

Step1

> 计算n-2的生成序列.

Step2

> 选择最小顶点(不包含n-2序列), 将该点与n-2序列中一点相连, 从n-2序列中删除相连的点, 加上该点.

Step

>...

Step n-1

> 重复以上步骤n-1遍, 所连图即为K~n~的一颗生成树.

## 未名定理

### 定理1

无向连通图中的任意一棵子树所对应的弦都含于该子树所对应的所有基本回路环和运算的集合.

### 定理2

无向连通图中任意两个回路做环和运算得到的集合仍然为图中环路.

#### 推论1

无向连通图中任意两个环路做环和运算得到的集合任然为图中环路.

### 定理3

无向连通图中的任意回路都为该图的任意一颗生成树的基本回路或者若干个基本回路的环和.

#### 推论1

|E|-|V|+1 ≤ |C~回路~| ≤ 2^|E|-|V|+1^-1

>|E|-|V|+1为弦数, 空集不是回路.

|C~环路~| = 2^|E|-|V|+1^

>空集是环路.

### 定理4

无向连通图的环路空间是Ω的|E|-|V|+1维的子空间.

>|E|-|V|+1维即环路空间中任何一个环路, 均是基于包含|E|-|V|+1个基本回路的基本回路系统中的元素推导(环和运算)而来.

### 定理5

连通图中每个割集至少包含该图的每棵生成树的一个树枝.

### 定理6

无向连通图中的任意一棵子树所对应的基本割集系统对应的树枝的并集都含于该子树所对应的所有基本割集对称差运算的集合.

### 定理7

断集做对称差运算仍然是断集.

### 定理8

无向连通图中任一断集为任一树的基本割集或若干个基本割集的对称差.

### 定理9

断集空间是Ω的|V|-1维的子空间.

>断集空间中元素均可由|V|-1个线性无关的基本割集通过对称差运算得到.

### 定理10

设正则r(≥2)叉树 T 有 i 个分支点和 t个树叶, ri = i+t-1 即 (r-1)i=t-1.

## Huffman算法

Step1

> 选取最小的两片树叶作为树叶.

Step2

> 将这两片树叶相加, 作为下一次循环的新实数权, 这两个权就不再加入下一轮运算.

Step3

> 重复前两个步骤, 直到只剩下一个权.

## 问题

1. 序列???
2. 定理4, 5???
3. 断集空间???
