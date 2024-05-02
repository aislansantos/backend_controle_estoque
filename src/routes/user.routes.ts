import { Router } from "express";
import * as AuthController from "@/controllers/Auth.Controller";

const router = Router();

router.post("/login", AuthController.login);

export default router;