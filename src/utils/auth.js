import Cookie from 'js-cookie'
const TokenName = "Ronin-Token"

// 设置Token过期时间为1分钟
let expires = new Date();
expires.setTime(expires.getTime() + (60 * 1000));

// 获取Token
export const getToken = () => {
    return Cookie.get(TokenName)
}

// 设置Token 过期时间为1分钟
export const setToken = Token => {
    return Cookie.set(TokenName, Token, {
        expires
    })
}

// 删除Token
export const removeToken = () => {
    return Cookie.remove(TokenName)
}