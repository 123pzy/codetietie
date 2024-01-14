import instance from "./index.js";

const path = import.meta.env.MODE == "development" ? "" : "";

// 添加文件夹
export const addCodeFolder = (data) => {
    return instance({
        method: "POST",
        url: path + `/add/${data.randomValue}`,
        data,
    });
};

// 更新代码文件
export const updateCodeFile = (data) => {
    return instance({
        method: "POST",
        url: path + `/add/updateCodeFile/${data.randomValue}`,
        data,
    });
};

// 查询内容
export const getCodeStick = (data) => {
    return instance({
        method: "GET",
        url: path + `/get/getContent?randomValue=${data}`,
    });
};