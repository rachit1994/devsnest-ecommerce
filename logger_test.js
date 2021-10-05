// console.log('hello');
// console.info('text info');
// console.warn('text warn');
// console.error('text error');
// console.error(new Error('something went wrong'));
const logger = require('./logger');

logger.info('text info', { meta: 1 });
logger.warn('text warn');
logger.error('text error');
logger.debug('text debug'); // this won't show because the level is set to info
//  after level 5
logger.error(new Error('something went wrong'));