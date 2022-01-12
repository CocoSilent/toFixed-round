### 修复toFixed四舍五入不准确问题

### 安装
yarn add tofixed-round

### 使用方式在程序入口处引入,对四舍五入的表达式用toFixed
~~~js
import 'tofixed-round';
console.log((0.1+0.205).toFixed(2));// 测试一下 结果为0.31即为成功,没引的话是0.30
~~~

### 为什么要做这个包
有很多包能解决这个问题，但是使用很麻烦比如 mathjs。

使用tofixed-round只要在最后结果加上toFixed就能保证四舍五入结果是准确的，而不关心中间计算过程的误差，减少心智负担

单个的加减乘除用起来没有问题，但是一个复杂表达式用起来就难受了，下面这些是取自mathjs的readme写法与用tofixed-round写法对比


|  mathjs   | toFixed-round  |
|  ----  | ----  |
| evaluate('12 / (2.3 + 0.7)')  | (12 / (2.3 + 0.7)).toFixed(2) |
| evaluate('9 / 3 + 2')   | (9 / 3 + 2).toFixed(2) |
| chain(3).add(4).multiply(2).done()    | ((3 + 4) * 2).toFixed(2) |



