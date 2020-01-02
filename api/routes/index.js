import express from 'express';
import jobRoutes from './job_routes';
import { checkJwt, checkScopes } from './../middleware/auth_middleware';
import errorMiddleware from './../middleware/error_middleware';

const router = express.Router();

router.use(errorMiddleware);

router.get("/api/external", checkJwt, checkScopes, (req, res) => {
    res.json({
      msg: "Your Access Token was successfully validated! Permission approved"
    });
  });

// Add authentication to these routes once set up
router.use(jobRoutes);

export default router;