import moment from "moment";

// 时间格式化
export const dateFormatter = (value,type) => {
    console.log(value,type);
    return moment(value).format(type || 'yyyy-MM-DD');
}