## WebPrinter某块

## 引用方式

### 1,复制dll和config.json文件到ext webprinter 目录下。 

### 2，在module.json文件中增加

```
"web-printer":{"dll":"ext/webprinter/WebPrinter.dll","class":"WebPrinter.Printer","methods":"print,printA3,printA4"}

```

## 方法列表

### 1, print

参数列表


参数|意义|默认
---|---|---
url|文件路径|可以是网页，也可以是pdf
pageSize|纸张大小| 默认为 "A4"
isPdf|是否为pdf| 1 是，0不是，默认 0
isRemotePdf|如果isPdf为1，则此参数为远程pdf还是本地pdf,| 1 是，0不是，默认 0



案例

```
   var printer = JsBridge.require("web-printer");
       printer.printA4({
           url: "http://cs.sp.wszx.cc/YtjComLogin-printGz.html?code=91130182MA0CNGG844&bg=1&aa=4&fu=1",
           test:"1"
       }, function (ret, err) {

			alert(ret.msg);
          // alert(err.msg);
       }
         );
```

### 2, printA3 

print 函数的pageSize 为 “A3”的简写

### 3, printA4   

print 函数的pageSize 为 “A4”的简写