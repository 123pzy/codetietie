import instance from "./index.js";

const path = import.meta.env.MODE == "development" ? "" : "";

// 添加内容
export const addCodeStick = (data) => {
    return instance({
        method: "POST",
        url: path + `/add/${data.randomValue}`,
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