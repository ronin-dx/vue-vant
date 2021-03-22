import service from '@/utils/axios'


export const getCode = () => {
    return service({
        url: '/code',
        method: 'GET'
    })
}