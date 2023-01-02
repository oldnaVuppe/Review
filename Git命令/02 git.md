#### 查看远程仓库关联的配置

```bash
git remote -v
git remote rm 别名    ==> origin
git remote add origin  https地址/ssh地址
```

#### 1. 查看 创建 切换分支

```bash
# git初始化时，默认只有一个master分支

# 查看所有分支列表
git branch    # * 表示当前处于哪个分支下
# 创建分支
git branch <分支名>  # 基于当前所处的分支，创建一个代码一模一样的分支
# 切换分支
git checkout <分支名>  # 切换到指定分支

# 创建并切换分支
git checkout -b <分支名> # ！ 注意，创建新分支的时候，要先切回master分支，一般情况下，基于master创建新的分支

```

#### 2. 合并分支

```bash
git checkout -b pay  # 处于pay分支下

# 在pay分支下写一些功能代码，写完之后，要提交一个版本 ！！

# 想要把pay分支的代码合并到master分支上

# 1.先切换回master分支 
git checkout master

# 2. 将pay分支的代码合并到master上
git merge pay  #(当前处于master分支下)
```

#### 3. 删除分支

```bash
git branch -d <分支名>
```

#### 4. 解决分支合并的冲突

```bash
# 1. 产生冲突的条件 
1. 不同的分支，同一个文件，同一个位置，修改了不同的代码

# 2. 如果对不同分支同一个文件同一位置修改了
1. 把test分支上的修改的功能，合并到master分支上

# 3.再执行合并操作的时候，就会产生冲突， 
git checkout master # 先切回master合并
git merge test
### ==> 会出现冲突 

# 4. 解决完冲突后，先保存，之后， 执行 git add . , 提交这次冲突的解决
git add .
git commit -m "冲突的解决"

<<<<
// 当前这个分支的修改
====
// 要合并进来的哪个分支的修改
>>>>>

1. 采用当前的更改  2. 采用传入的更改 3. 保留双方的更改  4.比较变更
```

## 2.remote

#### 1. 将本地的分支 推送到远端仓库

```bash
git push -u 远程仓库的别名  本地分支名:远程分支重命名 
git push -u origin  test:test-remote    # 这个时候远端仓库会新建一个test-remote分支，代码和test分支一模一样的

# 如果推送分支到远端， 远程仓库名字想和本地一致，不需要修改的话
git push -u origin 分支名   
```

#### 2. 查看远端仓库的所有分支

```bash
git remote show 远程仓库名称
git remote show origin  # origin是远程仓库的别名
```

#### 3. 跟踪分支

```bash
# 前提，同样需要远端分支和本地分支有关联 ！ 实际开发，使用SourceTree，UI界面操作就好

# 从远程仓库中, 把对应的远程分支下载到本地仓库, 保持本地分支和远程分支名称相同
git checkout 远程分支名字

# 示例
git checkout pay
```

#### 3. git pull  拉取远程分支最新代码

```bash
# 前提： 本地分支和远端的分支需要有关联  git push -u origin master   

# 注意 我当前处于哪个分支上，就会把对应的远程分支，最新的代码下载并合并到这个分支上
git pull 
```

#### 4. git pull出现冲突的情况

```bash
1. 远端修改了某个分支的某个文件代码
2. 本地也在同一个分支修改了同一个文件的同一位置代码
3. git push  Error   报错远端拒绝提交，提示先拉取
4. git pull 先把远端的代码同步到本地  ===> 产生冲突
5. 解决冲突， git add . git commit -m "resolve conflict"
```
