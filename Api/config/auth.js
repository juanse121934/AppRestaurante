require(`dotenv`).config();

module.exports = {
    secret: process.env.AUTH_SECRET || "trololo",
    expires: process.env.AUTH_EXPIR || "12h",
    rounds: process.env.AUTH_ROUNDS || 10
}

