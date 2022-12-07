import express from "express";
import {createOurTeam} from "../controllers/ourTeamController.js";

const router = express.Router();

router.route('/').post(createOurTeam)

export default router;