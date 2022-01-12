/**
 * 修复科学计数和法问题
 * @param num 小数
 * @returns {string}
 */
function scientificToNumber(num) {
    const str = num;
    const reg = /^([-]?\d+\.?\d*)(e)([-|+]?\d+)$/;
    let zero = '';
    if (!reg.test(str)) {
        return num;
    }
    const arr = reg.exec(str);
    const len = Math.abs(arr[3]) - 1;
    for (let i = 0; i < len; i += 1) {
        zero += '0';
    }
    if (arr[1].indexOf('-') === 0) {
        return `-0.${zero}${arr[1].replace('-', '').replace('.', '')}`;
    }
    return `0.${zero}${arr[1].replace('.', '')}`;
}

/**
 * 补齐小数位数0
 * @param source          源字符串
 * @param targetLength    目标长度
 * @returns {string}
 */
function padEnd(source, targetLength) {
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    if (source.length > targetLength) {
        return source;
    } else {
        targetLength = targetLength - source.length;
        return source + '0'.repeat(targetLength);
    }
};

/**
 * 修复toFixed四舍五入不准确问题
 * @param digit 小数位数
 * @returns {string}
 */
Number.prototype.toFixed = function (digit = 0) {
    const pow = Math.pow(10, digit);
    let value = `${this}`;
    if (this > 0) {
        value = (Math.round((this + Number.EPSILON) * pow) / pow).toString();
    } else if (this < 0) {
        value = (Math.round((this - Number.EPSILON) * pow) / pow).toString();
    }
    value = scientificToNumber(value);
    const [integer, decimal = ''] = value.split('.');
    if (digit > 0) {
        return `${integer}.${padEnd(decimal, digit)}`;
    }
    return integer;
};
