### 修复toFixed四舍五入不准确问题

### 安装
yarn add tofixed-accurate

### 使用方式在程序入口处引入,对四舍五入的表达式用toFixed
~~~js
import 'tofixed-accurate';
console.log((0.1+0.205).toFixed(2));// 测试一下 结果为0.31即为成功,没引的话是0.30
~~~

### 为什么要做这个包
有很多包能解决这个问题，但是使用很麻烦比如 mathjs。

单个的加减乘除用起来没有问题，但是复杂表达式用起来就难受了，下面这些是取自mathjs的readme写法与用tofixed-accurate写法对比。无论是表达式写法，还是链式
调用，都没有tofixed-accurate的写起来舒服


|  mathjs   | tofixed-accurate  |
|  ----  | ----  |
| evaluate('12 / (2.3 + 0.7)')  | (12 / (2.3 + 0.7)).toFixed(2) |
| evaluate('9 / 3 + 2')   | (9 / 3 + 2).toFixed(2) |
| chain(3).add(4).multiply(2).done()    | ((3 + 4) * 2).toFixed(2) |

使用tofixed-accurate只要在需要准确结果的地方加上toFixed就能保证四舍五入结果是准确的，中间过程的计算正常写就行，减少心智负担。一般情况都是在计算公式
的最终结果进行四舍五入，但是不排除有些业务是要求中间过程四舍五入的，注意这2种方式在有些情况下结果是有差异的。如 

~~~js
(0.123 * 1 + 0.123 * 1).toFixed(2) = 0.25

((0.123 * 1).toFixed(2) * 1 + (0.123 * 1).toFixed(2) * 1).toFixed(2) = 0.24
~~~





