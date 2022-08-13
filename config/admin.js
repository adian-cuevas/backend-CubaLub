module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '592206e2caccb896345a688a11bd81e3'),
  },
});
