# Python基础篇

## 搭建VScode的Python编译环境

### Step1_DownLoad

[下载VScode编辑器]("https://code.visualstudio.com/download") 

[下载Python3解释器]("https://www.python.org/downloads/") 

下面这几个选项全选勾。不知道为甚么的话用了就知道了ヾ(ﾟ∀ﾟゞ) 

![Python-00-00.jpg](https://images.loganren.xyz/images/2020/04/04/Python-00-00.jpg)

其余的步骤跟着安装应用程序走就完事。（PS：Python的安装路径如果是自定义的话，路径一定要记住，因为下面配置环境变量的时候就要用上了）

### Step2_配置环境变量

这件事情是第一次在我的Blog出现，但这件事并不会是最后一次出现，以后还会经常出现，Linux中更会经常用到，唯一的区别仅是没有图形化界面而已。所以在这里我会先详细讲述如何在Windows环境中配置。  

1.定义：环境变量其实就是一个Path，这个Path的目录下有一个或多个应用程序。
 
>例如：C:\Users\Logan\AppData\Local\Programs\Python\Python38-32，Python38-32是我们要启动的程序python.exe的上级目录，你将这个Path添加到环境变量后。然后打开PowerShell（或cmd）。这里推荐养成用PowerShell的习惯，为什么？因为它更“Power”。输入python你便会看到下面这幅图。

![Python-00-01.jpg](https://images.loganren.xyz/images/2020/04/04/Python-00-01.jpg) 

你输入`python`系统其实并不知道它在那里，但系统会到你添加的环境变量的目录下挨个挨个的去找，当它去C:\Users\Logan\AppData\Local\Programs\Python\Python38-32这个目录下查找时便会找到python并且运行。如果你不添加的话你就必须输入完整的目录了，如下图。

![Python-00-02.jpg](https://images.loganren.xyz/images/2020/04/04/Python-00-02.jpg)

>看到这里，你应该知道什么是环境变量了吧，接下来我会讲如何在Win10下快速添加环境变量。

2.Win10下添加环境变量。

>~~打开小娜，大喊环境变量，然后它就出来了~~，有一说一，这样挺好玩的，但一般要找什么东西的话，点开任务栏上的搜索按钮，输入要搜索的内容，eg：“环境变量”，然后点击系统属性上的环境变量，就可以开始设置了。接下来的设置分为两种情况，一种是设置用户变量，另一种是设置系统变量，就像它们的名字一样一个是当前用户的变量一个是系统全局变量，不管是哪个都要点开Path在Path变量中加入你python上级目录的地址，如果你和我一样安装python时未自定义安装目录，安装在Users\XXXXX下的话只能设置在用户变量中，如果是其他地方，你放在用户变量和系统变量下都行。

![Python-00-03.jpg](https://images.loganren.xyz/images/2020/04/04/Python-00-03.jpg) 

![Python-00-04.jpg](https://images.loganren.xyz/images/2020/04/04/Python-00-04.jpg) 

### Step3_建立PythonWorkSpace

新建一个Python的workspace文件夹，随便取个名字比如“PythonStudy”，然后在里面新建一个test.py文本，用VScode打开文件夹，文件夹，文件夹。不出意外，vscode会提醒你装插件Python,你安装就OK了，出了意外的话你点侧边栏最后一个到插件商店里去搜索Python，第一个就是它了，下载它，然后打开命令面板（ctrl+shift+p）输入"python:select interpreter"命令，回车，这个时候如果你前面设置好了环境变量的话就会在下面出现对应版本python解释器的选项，选择你的版本即可。然后F5调试，出现“select a debug configuration”默认第一个选调试当前文件夹即可。

![Python-00-05.jpg](https://images.loganren.xyz/images/2020/04/04/Python-00-05.jpg)

>PS：现在VScode给我的感觉已经很成熟了，以前搭建C/C++环境时不配置launch.json......基本没法用，而现在用默认配置不管是python还是C初学已经足够了。~~绝不是因为懒，绝不是！！！~~。如果想要自己配置的话，在当前工作区新建.vscode文件夹，然后把别人作业里的配置文件抄好复制粘贴即可。

附：一定要记得下python插件，VScode有大量的插件，可以根据自己的需要下载。

![Python-00-06.jpg](https://images.loganren.xyz/images/2020/04/04/Python-00-06.jpg)

over！！！
