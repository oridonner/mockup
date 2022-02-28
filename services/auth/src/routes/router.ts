import { Router } from 'express';

import * as controller from './controller';

const router = Router();

router.get('/handshake', controller.handShake);
router.post('/sign-in', controller.signIn);
router.post('/sign-out', controller.signOut);

export { router };
