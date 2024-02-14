import instance from "./index.js";

const path = import.meta.env.MODE == "development" ? "" : "";

// 解决这里data类型都为any的问题
// 添加文件夹
export const addCodeFolder = (data:any) => {
    return instance({
        method: "POST",
        url: path + `/add/${data.randomValue}`,
        data,
    });
};

// 更新代码文件
export const updateCodeFile = (data:any) => {
    return instance({
        method: "POST",
        url: path + `/add/updateCodeFile/${data.randomValue}`,
        data,
    });
};

// 查询内容
export const getCodeStick = (data:any) => {
    return instance({
        method: "GET",
        url: path + `/get/getContent?randomValue=${data}`,
    });
};