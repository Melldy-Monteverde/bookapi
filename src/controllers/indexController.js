const getRoot = (req, res) => {
    res
    .status(200)
    .json({
      ok: true,
      status: 200,
      message: 'hello from api root',
    })
}

module.exports = {
  getRoot
}