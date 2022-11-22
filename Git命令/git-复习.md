#### 1. 用户信息配置

```js
git config --global user.name ""
git config --global user.email ""

git config --global --list
```

#### 2. 创建一个git仓库

```bash
# cd 文件夹   打开终端  注意在哪个文件下
git init 

# 下载已经存在的项目
git clone 地址
```

#### 3. 

```bash
工作区 暂存区 git仓库

文件的四个状态
未纳入管理  未跟踪 Untracked
纳入git管理   未修改
			已修改
			已暂存
            
git的三个状态  已修改   已暂存   已提交
```

#### 4. 将文件纳入git管理

```bash
git add 文件名 
git add .

# 将已修改的文件放到暂存区
git add . 
```

#### 5. 查看git状态

```bash
git status 
git status --short
git status -s
```

#### 6.  提交这次版本更新

```bash
git commit -m "描述信息"

# 跳过暂存区 直接提交   这个文件必须已经纳入git管理，并提交过
git commit -am "描述信息"
```

#### 7. 查看提交的历史记录

```bash
git log --oneline

# 查看所有的记录
git reflog
```

#### 8. 回退版本

```bash
git reset --hard commitID
```

#### 9. 

```bash
git reset HEAD .    # 将暂存区的文件移到工作区
```

#### 10

```bash
# 将仓库中的文件变为未跟踪的状态
git rm --cached 文件名
git rm -r --cached .  # 一次性全部移除
```

#### 11. 当我们使用.gitignore 的时候

.gitignore 只忽略未跟踪的文件  ==> vscode icon  插件

```bash
1. git rm -r --cached .
2. git add .
3. git commit -m "update .gitignore"
```
