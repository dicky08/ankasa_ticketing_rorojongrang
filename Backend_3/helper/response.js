const response = {
  success: (res, data, message) => {
      const result = {
        success: true,
        code:200,
        status:'OK',
        message,
        data
      }
      res.status(200).json(result)
  },
  Error: (res, data, message) => {
    const Error = {
      success: false,
      code: 500,
      status: 'Error',
      message,
      data
    }
    res.status(500).json(Error)
  }
}
module.exports = response