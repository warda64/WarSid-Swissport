import express from 'express';
//import userRoutes from './user.route';
import authRoutes from './auth.route';
import planRoutes from './planning.route';

import expressJWT from "express-jwt";
import config from '../../config/config';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/echec').get(function(req,res){
  res.render('echec');
});


router.use(authRoutes);
router.use(planRoutes);


export default router;