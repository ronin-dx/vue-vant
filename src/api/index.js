import service from '@/utils/request'

export const getLists = () => {
    return service({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET'
    })
}

export const douyin = params => {
    return service({
        url: 'http://192.168.1.15:3000/api/douyin',
        method: 'GET',
        params
    })
}