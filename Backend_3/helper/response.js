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
  failed: (res, data, message) => {
    const failed = {
      success: false,
      code: 500,
      status: 'Error',
      message,
      data
    }
    res.status(500).json(failed)
  }
}

module.exports = response