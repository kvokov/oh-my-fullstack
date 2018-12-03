import boom from 'boom';
import { IS_DEV } from '../config';
import { logger } from '../helpers';

/**
 * Error handler
 *
 * @param err
 * @param req
 * @param res
 * @param next
 */
export const handler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  const error = {
    ...err.output.payload,
    details: err.data || undefined,
  };

  logger.error(JSON.stringify({
    request: `${req.method} ${req.url}`,
    error,
  }, null, IS_DEV ? 2 : 0));

  res
    .status(err.output.statusCode)
    .set(err.output.headers)
    .json(error)
    .end();
};

/**
 * Not Found middleware
 * Users to catch 404 and forward to error handler
 *
 * @param req
 * @param res
 * @param next
 */
export const notFound = (req, res, next) => next(boom.notFound());

/**
 * Error format middleware
 * If error is not an instanceOf Boom, convert it
 *
 * @param err
 * @param req
 * @param res
 * @param next
 */
export const format = (err, req, res, next) => (boom.isBoom(err) ? next(err) : next(boom.boomify(err)));

/**
 * Errors handlers/middleware
 *
 * @typedef {Object} Errors
 * @property {function} handler
 * @property {function} notFound
 * @property {function} format
 */
export default {
  handler,
  notFound,
  format,
};
