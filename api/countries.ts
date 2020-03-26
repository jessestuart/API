import { keys } from '../config.json'
import scraper from '../scraper'
import redis from '../utils/redis'
import _ from 'lodash'

export default async (req: any, res: any) => {
  const sort = req.query.sort || 'cases'
  console.log({ sort })
  let countries = await scraper.getCountries(keys.countries, redis)
  // (await redis.get(keys.countries)) ||
  // let countries = JSON.parse(await redis.get(keys.countries))
  if (countries && sort) {
    console.log({ countries })
    // countries = _.sortBy(countries, sort || 'cases')
    countries.sort((a, b) => (a[sort] > b[sort] ? -1 : 1))
  }
  res.send(countries)
}
