export const commonRegExp = {
  isCardID: (src: string) => {
    return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(src);
  },
  isCardID2: (src: string) => {
    return /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(
      src
    );
  },
  isMobilePhone: (src: string) => {
    return /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/.test(
      src
    );
  },
  isNumber: (src: string) => {
    return /^(?:0|\-?(?:0\.\d*[1-9]|[1-9]\d*(?:\.\d*[1-9])?))$/.test(src);
  },
  isEmail: (src: string) => {
    return /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(
      src
    );
  },
  /** 用户名（4到16位、字母、数字、下划线、减号） */
  isUsername: (src: string) => {
    return /^[a-zA-Z0-9_-]{4,16}$/.test(src);
  },
  /** 密码（6~18之间、只能包含字母、数字和下划线）*/
  isPassword: (src: string) => {
    return /^[a-zA-Z]\w{5,17}$/.test(src);
  },
  /** 密码强弱（最少6位、包括至少1个大写字母、1个小写字母、1个数字、1个特殊字符）*/
  isStrongPassword: (src: string) => {
    return /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(
      src
    );
  },
  isQQ: (src: string) => {
    return /^[1-9][0-9]{4,10}$/.test(src);
  },
  isWeChat: (src: string) => {
    return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(src);
  },
  /** 特殊字符检测（键盘上可见的非字母和数字的符号） */
  isSpecial: (src: string) => {
    return /((?=[\x21-\x7e]+)[^A-Za-z0-9])/.test(src);
  },
  isUrl: (src: string) => {
    return /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.test(
      src
    );
  },
  isCarID: (src: string) => {
    return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(
      src
    );
  },
  isChinese: (src: string) => {
    return /[\u4E00-\u9FA5]/.test(src);
  },
  isPassport: (src: string) => {
    return /^(P\d{7}|G\d{7,8}|TH\d{7,8}|S\d{7,8}|A\d{7,8}|L\d{7,8}|\d{9}|D\d+|1[4,5]\d{7})$/.test(
      src
    );
  },
  /** 固定电话（区号+座机号码+分机号码） */
  isPhone: (src: string) => {
    return /^(0[0-9]{2,3}\/-)?([2-9][0-9]{6,7})+(\/-[0-9]{1,4})?$/.test(src);
  },
  isIP: (src: string) => {
    return /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/.test(
      src
    );
  },
  isZipCode: (src: string) => {
    return /^[1-9]{1}(\d+){5}$/.test(src);
  },
  isLongitude: (src: string) => {
    return /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/.test(
      src
    );
  },
  isLatitude: (src: string) => {
    return /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/.test(
      src
    );
  }
};
