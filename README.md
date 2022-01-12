### 修复toFixed四舍五入不准确问题

### 安装
yarn add tofixed-round

### 使用方式在程序入口处引入,对四舍五入的表达式用toFixed
~~~js
import 'tofixed-round';
console.log((0.1+0.205).toFixed(2));// 测试一下 结果为0.31即为成功,没引的话是0.30
~~~

