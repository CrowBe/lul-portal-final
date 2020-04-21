import express from 'express';
import { checkJwt, checkScopes } from './../middleware/auth_middleware';
import errorMiddleware from './../middleware/error_middleware';
import jobRoutes from './job_routes';

const router = express.Router();

router.use(errorMiddleware);

router.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});


// Add authentication to these routes once set up
router.use('/api', checkJwt, jobRoutes);

export default router;