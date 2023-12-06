import { Router } from "express";
import translateController from "./translate.controller";

const translateRouter = Router();

translateRouter.post('/', translateController.translateString);

translateRouter.get('/:discordId', translateController.getTranslationsByDiscordId);

export default translateRouter;