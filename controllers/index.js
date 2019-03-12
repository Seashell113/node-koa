var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

var fn_signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
};

var fn_data1 = async (ctx, next) => {

    var data={
        error_code: 100,
        active: [{
            content: "客服已同意你的退款申请",
            createDate: "2019-01-28 14:33:55",
            id: "215",
            isRead: "1",
            title: "客服已同意你的退款申请",
            updateDate: "2019-01-28 14:33:55"
        }],
        error_code: 100,
        new: 0
    }
    ctx.response.body = data;
};

module.exports = {
    'GET /': fn_index,
    'GET /getData': fn_data1,
    'POST /signin': fn_signin
};