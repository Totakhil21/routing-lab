import { Router } from "express";
import { campusesAboutInfo, getAllCampuses, getCampusById, searchCampuses } from "../controllers/campuses.controller.js";

const router = Router();


router.get(["/about", "/info"], campusesAboutInfo);

router.get("/search", searchCampuses);


router.get("/", getAllCampuses);


router.get("/:id", getCampusById);

export default router;
