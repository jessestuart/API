import { keys } from "../../config.json";
import scraper from "../../scraper";

class Redis {
  _db = {};

  get(key) {
    return this._db[key];
  }

  set(key, value) {
    this._db[key] = value;
  }
}
const redis = new Redis();

export default async (req, res) => {
  const all = await scraper.getAll(keys, redis);
  console.log(all);
  res.send(all); // await JSON.parse(await redis.get(keys.all))
};
// app.get('/all/', async function(req, res) {
//   const all = await JSON.parse(await redis.get(keys.all))
//   res.send(all)
// })
