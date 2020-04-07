import express from 'express';
import { checkJwt, checkScopes } from './../middleware/auth_middleware';
import errorMiddleware from './../middleware/error_middleware';
import mailHandler from '../controllers/mail_controller';
// import jobRoutes from './job_routes';

const router = express.Router();

router.use(errorMiddleware);

router.get("/api/external", checkJwt, (req, res) => {
  console.log("got this far")
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

router.post("/api/mail-request", mailHandler)

// Add authentication to these routes once set up
// router.use(jobRoutes);

export default router;