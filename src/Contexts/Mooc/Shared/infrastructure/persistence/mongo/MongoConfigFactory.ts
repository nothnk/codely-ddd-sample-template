import config from '../../config';
import MongoConfig from './MongoConfig';

const mongoConfig = {
  url: config.get('mogno.url')
};

export class MongoConfigFactory {
  static createConfig(): MongoConfig {
    return mongoConfig;
  }
}
