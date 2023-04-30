import express,{Router} from "express";
import { AddUser,GetUsers ,GetUser, editUser,deleteUser} from "../controllers/user-controller.js";

const router = express.Router();

router.post("/add",AddUser);
router.get("/allUsers",GetUsers);
router.get("/User/:userId",GetUser);
router.put("/User/:userId",editUser);
router.delete("/User/:userId",deleteUser);

export default router;
