import { keys } from '../config.json'
import scraper from '../scraper'
import redis from '../utils/redis'

export default async (_req: any, res: any) => {
  let states =
    (await redis.get(keys.states)) ||
    (await scraper.getStates(keys.states, redis))
  res.send(states)
}
