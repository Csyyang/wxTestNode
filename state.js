var state = {
    login: {
        faild: {
            code: '00',
            message: '创建失败,用户名重复'
        },
        success: {
            code: '01',
            message: '创建成功'
        },
        err2: {
            code: '02',
            message: '账号密码错误'
        },
        err: {
            code: '03',
            message: '数据库连接错误'
        },
        logSuccess: {
            code: '04',
            message: '登录成功'
        },
        err3: {
            code: '05',
            message: '账号或密码错误'
        },
        noString: {
            code: '06',
            message: '账户名密码为空'
        }
    }
}
module.exports = state;