import { Router } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { status } from '../handlers/status';
import { errors } from '../handlers';


const router = new Router();

router.use(
  cors({ origin: true }),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
);

router.get('/', status);

// error handling
router.use(
  errors.notFound,
  errors.format,
  errors.handler,
);

export default router;
