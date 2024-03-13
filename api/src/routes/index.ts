import express, {
    NextFunction,
    Request,
    Response,
    Router,
    response,
} from "express";
import shortUrlRoutes from "./shortUrl.routes";
import AppError from "../utils/appError";

const router = Router();

router.use("/shortUrl", shortUrlRoutes);




router.get("/healthChecker", (_, res: Response) => {
    res.status(200).json({
        status: "success",
        message: "All looks well!",
    });
});

router.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(404, `Route ${req.originalUrl} not found`));
});

export default router;