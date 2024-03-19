import "dotenv/config";
import jwt from "jsonwebtoken";
const { sign, verify } = jwt;

function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPwd: user.userPwd
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    }
    );
}

function verifyAToken(req, res, next) {
    const token = req?.headers['authorization'];
    if (token) {
        try {
            if (verify(token, process.env.SECRET_KEY)) {
                next();
            } else {
                res.status(401).json({
                    status: res.statusCode,
                    msg: "Please provide the correct credentials."
                });
            }
        } catch (error) {
            res.status(500).json({
                status: res.statusCode,
                msg: "Token verification failed."
            });
        }
    } else {
        res.status(401).json({
            status: res.statusCode,
            msg: "Please login."
        });
    }
}

export {
    createToken,
    verifyAToken
};
