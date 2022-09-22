export default {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  refreshToken: {
    secret: process.env.REFRESH_SECRET,
    expiresIn: process.env.REFRESH_EXPIRES_IN,
    duration: process.env.REFRESH_DURATION,
  },
}
