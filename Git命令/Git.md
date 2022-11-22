# Git

#### 1. 配置用户信息

```js
⭐ git config --global user.name "your name"   # user.name后面是空格!
⭐ git config --global user.email "your email"
⭐ git config --list --global // 查看 --global --list
// ⭐注意：如果使用了 --global选项，该命令只需要运行一次，即可永久生效
```

#### 2. config 的三个作用域

```js
git config --local  // local只对仓库有效
git config --global // global对登录用户所有仓库有效
git config --system // system对系统的所有用户有效
```

#### 3. 清除 --unset

```js
git config --unset --local user.name
git config --unset --global user.name // 一般用的是global
git config --unset --system user.name
```

#### 4. 优先级

```js
local > global > system
```

#### 5. 建Git仓库

```js
1. 用Git之前已经有项目代码
   cd 项目代码所在的文件夹
⭐ git init
2. 用Git之前还没有项目代码
   cd 某个文件夹
⭐ git init project_name // 在在当前路径下创建和项目名称同名的文件夹
3.从其他服务器上克隆一个已经存在的Git仓库
   cd 文件夹
⭐ git clone 某个地址
```

#### 6. 文件的4种状态

```js
1.未被跟踪的状态 Untracked : 未跟踪 , 文件没有纳入git管理
2.已被跟踪的状态
 未修改 Unmodified
 已修改 Modified
 已暂存 Staged
```

#### 7. 检查当前文件的状态

```js
⭐ git status  精简模式: git status -s / --short 
// 红色 表示工作区中的文件需要提交
// 绿色 表示暂存区中的文件需要提交
?? : 新添加的未跟踪文件(Untracked)
A : 新添加到暂存区中的文件(Staged)
M : 修改过的文件 (暂存区)
 // 红色 工作区文件的内容和Git仓库中文件的内容不一致
 // 绿色 文件已修改，且已放入暂存区
⭐ git config --global core.quotepath false // 解决中文乱码问题
```

#### 8. 跟踪新文件

```js
⭐ git add 文件名   git add . // 向暂存区一次性添加多个文件
// 添加后的文件处于暂存状态
```

#### 9. 移除文件

```js
⭐ git rm -f 文件名 // 从 Git仓库和工作区中同时移除文件
⭐ git rm --cached 文件名 //  只从 Git 仓库中移除文件，但保留工作区中的文件
```



#### 10. 提交更新

```js
⭐ git commit  提交之前，检查状态 git status
git commit -m "本次提交要记录的提交描述信息"
// 只要执行git commit -m ""  就会把已暂存的文件 提交到本地仓库中持久的保存起来。（记录快照）
⭐ git commit --amend -m "修改最近一次提交信息"
// 修改最近一次提交说明 amend 修正
```

#### 11. 跳过使用暂存区

```js
⭐ git commit -a -m "描述信息"
```

#### 12. 撤销对文件的修改

```js
⭐ git reset HEAD    // 暂存区要移出的文件名称
    git reset HEAD . // 空格 英文点号， 把暂存区所有的文件都移到工作区
```

#### 13. gitignore

#### <img src="C:\Users\dt171\Desktop\照片\微信图片_20221023215012.png" style="zoom:50%;" />

```js
// 注意: .gitignore 只忽略没有被追踪的文件, 如果文件已经被纳入了管理, 则修改.gitignore无效.
// 解决办法: 先把本地缓存删除, 把仓库中的文件 改为 未被追踪的状态,重新提交
```

#### 14. git log

```js
⭐ git log 查看提交日志
    git log --oneline // 在一行上展示所有的提交历史
    git log -2 --pretty=oneline // 在一行上展示最近两条提交历史的信息
	git log -2 --pretty=format:"%h | %an | %ar | %s" // &h 提交的简写哈希值  %an 作者名字  %ar 作者修订日志  %s 提交说明
	git reset --hard 版本号(head~数字) 可以回退到任意版本   
    git reflog // 可以查看所有的版本信息
```

#### 15. 一些常见的命令

```bash
# cd 进入文件目录   . 当前目录  ..上一级目录

# cat 文件名字  查看文件的内容
# mkdir 创建文件夹
# touch 文件名   ==> 新建一个文件
# ll 列出文件详细信息
# ls 列出文件
# pwd 显示当前的目录
# clear 清除控制台     ==> 终端 ：cls

# 使用vim编辑器 
vi 文件名  编辑文件
i  进入编辑模式
:q 不保存退出 (若有修改提示报错)
:q! 强制不保存退出
:w  保存
:wq 强制保存并退出
按ESC, 退出编辑模式
```

#### 16. 远程仓库

```bash
# 1.添加一个新的远程仓库 点击回车, 建立远端仓库的链接
⭐  git remote add origin git地址  origin其实就是要添加的这个远程仓库http:://xxx.git的名称
# 2.查看当前的远程库
⭐  git remote 
    git remote -v   # 执行时加上 -v 参数，你还可以看到每个别名的实际链接地址。
```

#### 17. 基于HTTPS上传

```bash
# 用于从将本地的分支版本上传到远程并合并。
⭐  git push
# origin 远程仓库的别名， master 本地分支名
⭐  git push origin master
# 实际案例    :重命名     原来名字:新名字
⭐  git push -u origin payment:pay
# 加上了-u参数，Git不但会把本地的master分支内容推送的远程origin仓库，还会把本地的master分支和远程的origin仓库关联起来，在以后的推送或者拉取时就可以⭐简化命令git push
⭐  git push -u origin(远程仓库名字)  master  # 第一次推送时输入 -f (强制推送)
```

#### 18. 基于SSH上传

```bash
# 先本地创建一个项目文件夹, 并在项目中添加一些新的文件
# 运行 git init 初始化新的创库
# 检查当前工作区状态 git status -s
# 运行 git add . 将文件都添加进暂存区 , 并再次检查文件状态 git status -s
# 运行 git commit -m "初始化项目" (描述信息可以自定义)
# 到此, 我们完成了一个本地的版本提交 , 但是并没有同步到远端.
```

#### 19. clone远程仓库

```bash
# 可以 选择HTTPS 或者 SSH 都行
⭐  git clone 远程仓库地址
# 比如下载Vue的项目源码, 可以使用如下命令
⭐  git clone git@github.com:vuejs/vue.git
```

#### 20. 分支创建、切换、删除、跟踪

```bash
# 在 branch 后面加上一个名字, 代表创建一个新分支
# ⭐ 注意
# 1. 创建的分支是基于当前所处的分支创建的
# 2. 创建完后, 用户还是处在master分支上
⭐  git branch 新分支名称
# 查看分支
⭐  git branch 
# 删除分支
⭐  git branch -d 分支名称  # 注意要删除某个分支时, 不能在那个分支上面
# ⭐PS.注意: 删除本地分支
    git branch -d 分支  # 如果代码没有合并到：master, 会提示：git branch -D 分支 
# 删除远程仓库中，指定名称的远程分支
⭐ git push 远程仓库名称 --delete 远程分支名称
# 切换到指定的分支上
⭐  git checkout 指定分支名字
# 快速切换和创建分支
⭐  git checkout -b 分支名称
# 从远程仓库中, 把对应的远程分支下载到本地仓库, 保持本地分支和远程分支名称相同
⭐  git checkout 远程分支名字
# 从远程仓库中，把对应的远程分支下载到本地仓库，并把下载的本地分支进行重命名
⭐  git checkout -b 本地分支名称 远程仓库名称/远程分支名称
```

#### 21. 分支合并

```bash	
# 1. 首先切换到 master 分支
⭐  git checkout master
# 2. 然后在master 分支上运行 git merge 命令，将 login 分支的代码合班到 master 分支
⭐  git merge login
⭐⭐ 
# 合并分支时的注意点：
# 假设要把 login 分支的代码合并到 master 分支，
# 则必须先切换到 master 分支上，再运行 git merge 命令，来合并 login 分支！
```

#### 22. 拉取远程分支最新代码

```bash
# 从远程仓库，拉取当前分支最新的代码，保持当前分支的代码和远程分支代码一致
⭐  git pull	
```

#### 总结

```bash
 能够掌握 Git 中基本命令的使用
 git init
 git add .
 git commit –m "提交消息"
 git status 和 git status -s
 能够使用 Github 创建和维护远程仓库
 能够配置 Github 的 SSH 访问
 能够将本地仓库上传到 Github
 能够掌握 Git 分支的基本使用
 git checkout -b 新分支名称
 git push -u origin 新分支名称 第一次上传
 git checkout 分支名称
 git branch 查看当前分支
```

