//dito cocompile lahat ng process (routes)
//para di siya sabog sa js
import { Router} from "express";
const router = Router() //Magagamit na both post and get

router.get("/getbook", (req,res) => res.send("GET from external file"));
router.post("/uploadbook", (req,res) => res.send("POST from external file"))

export default router;