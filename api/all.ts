import { keys } from '../config.json'
import scraper from '../scraper'
import redis from '../utils/redis'

export default async (req, res) => {
  const all = redis.get(keys.all) || (await scraper.getAll(keys.all, redis))
  res.send(all)
}
