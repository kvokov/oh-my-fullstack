import { name, description, version } from '../../package';

/**
 * Default status handler
 *
 * @param req
 * @param res
 */
export const status = (req, res) => res.json({ name, description, version });

/**
 * Status handlers
 *
 * @typedef {Object} Status
 * @property {function} status
 */
export default {
  status,
};
