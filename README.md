# pug模板引擎(原jade)


### 使用npm安裝pug
~~~
$ npm install pug

$ npm install pug-cli -g
~~~


### 基礎編譯
#### 建立檔案 index.pug
~~~
doctype html
html(lang="en")
    head
      meta(http-equiv="X-UA-Compatible")
      title DEMO中文測試
      link(href="css/index.css" rel="stylesheet" type="text/css")
      script(type='text/javascript')
    body
      include pug_folder/a.pug
~~~


### 啟動命令
~~~
pug index.pug
~~~


### index.pug 來源 \pug\
~~~
pug .\pug\index.pug
~~~


### 建立目錄 \inc\
~~~
pug index.pug -o inc

pug index.pug -o ./
~~~


<!--### 重新命名及設定目錄
~~~
pug index.pug (inc/test.html)
~~~-->


### 自動執行(壓縮HTML)
~~~
pug index.pug -w
~~~


### 自動執行(格式化HTML)
~~~
pug index.pug -w -P
~~~


### 批量編譯 資料夾名稱
~~~
pug pug_folder
~~~
