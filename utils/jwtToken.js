const sendToken = (adminData, statusCode, res) => {
  const token = adminData.getJWTToken();

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    status: true,
    adminData,
    token,
  });
};

module.exports = sendToken;