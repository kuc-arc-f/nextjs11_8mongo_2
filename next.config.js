module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages/', 'components/']
  },
  env: {
    COOKIE_KEY_USER_ID: "ap21uid",
    BASE_URL: "http://localhost:3000",
    /* Atlas URI: user:<<password>>@ hostname/dbName */
    MONGODB_URI: "",
    MONGODB_DB_NAME: "test",
  },  
}
