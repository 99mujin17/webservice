module.exports = {
    CheckAuth: async function(req, res, next) {
        console.log(req);
        console.log(req);
        console.log(req);
        console.log(req);
        console.log(req);
        console.log(req);


        if(req.isAuthenticated()) {
            console.log('로그인 된 사용자입니다.');
            console.log('로그인 된 사용자입니다.');
            console.log('로그인 된 사용자입니다.');
            console.log('로그인 된 사용자입니다.');
            console.log('개오바');
            console.log('2트 드가제');
            next();
        }
        else {
            res.redirect('/user/signin');
        }
    },
}