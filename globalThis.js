const $Map = require("es6-map")
const $Symbol = require("symbol")
const isUndefined = require("@is-(unknown)/is-undefined")
const attempt = require("attempt-x")
const construct = require("construct-new-second")
const continuee = require("noop-enterprise")
const isNotNullOrUndefined = require("is-").is
const isCallable = require("is-callable")
const exec = require("eval-intrinsic-ai")

const tryGlobalThis = () => isUndefined(globalThis)
const trySelf = () => isUndefined(self)
const tryWindow = () => isUndefined(window)
const tryGlobal = () => isUndefined(global)

const { True, False } = require("array-get-member")

const DEFAULT = $Symbol("default try")

const TRIES = construct($Map, [
  [
    [tryGlobalThis, "globalThis"],
    [trySelf, "self"],
    [tryWindow, "window"],
    [tryGlobal, "global"],
    [DEFAULT, require("function-intrinsic-ai")("return this")()],
  ],
])

function doTry(trie) {
  const tryResult = attempt(trie)

  if (tryResult.threw) {
    return False
  }

  if (tryResult.value) {
    return True
  }

  return False
}

function handleTries(tries) {
  let result
  tries.forEach((value, key) => {
    if (isNotNullOrUndefined(result)) continuee()
    else {
      if (isCallable(key)) {
        const someResult = doTry(key)
        if (someResult) {
          result = value
        } else {
          continuee()
        }
      } else {
        continuee()
      }
    }
  })
  if (isNotNullOrUndefined(result)) return exec(result)
  else result = tries.get(DEFAULT)
  return result
}

const globalObject = handleTries(TRIES)

module.exports = globalObject