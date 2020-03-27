class Redis {
  _db = {}

  get(key) {
    console.log('returning from "redis"')
    return this._db[key]
  }

  set(key, value) {
    this._db[key] = value
  }
}

const redis = new Redis()

export default redis
