var UserSQL = {
    insert: 'INSERT INTO users(name,password) VALUES(?,?)',//插入数据
    drop: 'DROP TABLE users',//删库跑路
    queryAll: 'SELECT * FROM users',
    getUserById: 'SELECT * FROM users WHERE name = ?'//查询符合条件数据
};

module.exports = UserSQL;
