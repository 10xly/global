module.exports = function () {
  const defineProperty = require("es-define-property")
  const ObjectPrototype = require("object.prototype-intrinsic-ai")

  defineProperty(ObjectPrototype, "__magic__", {
    get: function () {
      return this
    },
    configurable: require("true-value")(),
  })
  const magic = __magic__
  delete ObjectPrototype.__magic__
  return magic
}
