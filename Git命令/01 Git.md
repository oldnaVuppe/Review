#### Git基本概念

Git 分布式版本控制系统     linus 2周 C语言写的

版本控制系统 version control system   ==> VCS

作用： 代码存档备份，支持多人协作开发。

#### 版本控制系统的分类

1. 本地VCS
2. 集中式VCS   ==> SVN
3. 分布式VCS   ==> Git 

#### Git 三个区域

1. 工作区 workspace   红色
2. 暂存区  staged      绿色
3. Git仓库

#### git bash里面不能ctrl v ==>  右键 paste 粘贴

#### 1. 配置用户信息

使用Git之前，第一步就是配置用户信息

```bash
git config --global user.name "your name"   # user.name后面是空格!
git config --global user.email "your email"  # 以后去到了公司，用的是公司给你配置的邮箱
// 注意，空格不能少
```

#### 2. 查看配置信息

```bash
git config --list --global    #--global --list 可以交换位置.
```

#### 3. 清除某个配置 --unset

```bash
git config --unset --global user.name  # 一般用的是global
```

#### 4. 记录用户信息的位置

C ==>  .gitconfig 文件 

---

#### 1. 新建git仓库 

1. 已经有了项目文件的情况下

```bash
# 在项目文件夹   右键 git bash here 
# 进入项目文件
git init  

cd # 进入某个文件夹
```

2. 直接初始化一个空的项目仓库

```bash
git init 新项目的名字 
# 会自动创建一个项目文件夹，并且在文件里面初始化git仓库
```

3. git clone 拉取本身存在的项目，拉取下来之后，项目里默认就会有一个仓库

```bash
git clone 地址
```

#### 2. 查看文件状态

```bash
git status  #
git status --short  # 简洁模式  ??表示文件未跟踪
git status -s   # 简写

# 解决中文乱码问题
git config --global core.quotepath false
```

#### 3. 跟踪新的文件

```bash
# 1. 
git add 文件名字 # 把未跟踪的文件纳入git管理， 默认会放到暂存区。

git add .  # 一次性的将所有文件纳入git管理  ===> 以后会用的很多

# clear清屏 
U:未跟踪的文件

??: 未跟踪的文件
A:新跟踪的文件，并且放到了暂存区。、
M:已修改的文件

// 颜色  红色   ===> 工作区    绿色  ===> 暂存区

# 2. 将已修改的文件添加到暂存区。
```

#### 4. 提交更新 

```bash
 # 提交之前，我们需要把已修改的文件全部放到暂存区  git add . 
 git commit -m "本次修改的描述信息"
 
 # 跳过暂存区直接提交 （不用输入 git add）
 # 前提是 已经跟踪提交过, 需要先提交一次文件
 git commit -a -m "描述"
 git commit -am "描述"
```

#### 5. 查看历史提交信息

```bash
git log 
git log -2 # 查看两条
git log --oneline   #一行显示 精简模式  重点记住 

# 每一个commit 就是一个版本记录   历史记录前面的7个字符就是   CommitID
```

#### 6. 回退到指定的版本

```bash
# 先查看历史记录
git log --oneline  可以得到commitID
# 使用reset回退版本 
git reset --hard commitID
# 可以再查看一下记录
git log --oneline
```

#### 7. 将暂存区的文件移到工作区 

```bash
# 需要提交一次 git commit 
git reset HEAD 文件名
git reset HEAD .
```

#### 8. 将git仓库中的文件放到工作区，并且让文件处于未跟踪状态

```bash
git rm --cached index.html 
# 将文件从仓库中删除，变为未跟踪状态
```

#### 9. 将不需要管理的文件忽略

- .gitignore 只忽略未跟踪的文件。如果文件已经纳入了git管理，则gitignore 配置无效

```bash
# 前提是 未跟踪的文件才能添加到gitignore生效

# 1. 将已经在仓库中的文件变为 未跟踪状
git rm -r --cached .   #一次性把所有仓库中的文件都拿出来，都变为未跟踪的状态

# 2. 重新添加，应用gitignore配置
git add .

# 3.提交一下这次更新
git commit -m "更新gitignore"
```

#### 10 VSCode配置git bash

```json
// Ctrl + j  
// cmd + j

Ctrl + shift + p  ==> 输入 JSON 

// where git 
// path 修改为Git bash的路径

"terminal.integrated.profiles.windows": {
    "PowerShell -NoProfile": {
      "source": "PowerShell",
      "args": [
        "-NoProfile"
      ]
    },
    "Git-Bash": {
      "path": "D:\\Program Files\\Git\\bin\\bash.exe",  
    }
  },
"terminal.integrated.defaultProfile.windows": "Git-Bash",
```



```bash
# git 三个区域 
工作区  暂存区  git仓库
# git 三个状态  
已修改  已暂存  已提交
# 文件的四个状态
未纳入git管理   1. 未跟踪 Untracked

已纳入git管理   1. 未修改 Unmodified
			  2. 已修改 modified 
              3. 已暂存  staged
```

