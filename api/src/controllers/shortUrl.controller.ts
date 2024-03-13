import express from "express";
import { urlModel } from "../model/shortUrl";

export const index = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrls = await urlModel.find().sort({ createdAt: -1 }).select(['_id', 'shortUrl', 'fullUrl', 'clicks', 'createdAt'])
        if (shortUrls.length < 0) {
            res.status(404).send({ message: 'No URLs found' })
        } else {
            res.status(200).send(shortUrls);
        }
    } catch (error) {
        res.status(500).send("Soothing went wong");
    }
}

export const store = async (req: express.Request, res: express.Response) => {
    try {
        const fullUrl = req.body.fullUrl
        const urlFound = await urlModel.find({ fullUrl: fullUrl })
        if (urlFound.length > 0) {
            res.status(409)
            res.send(urlFound)
        } else {
            const shortUrl = await urlModel.create({ fullUrl });
            res.status(201).json(shortUrl);
        }
    } catch (error) {
        res.status(500).send("Kill you with a knife");
    }
}

export const show = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrl = await urlModel.findOne({ shortUrl: req.params.id })
        if (!shortUrl) {
            res.status(404).send('URL not found')
        } else {
            shortUrl.clicks += 1;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`)
        }
    } catch (error) {
        res.status(500).send("Kill you with a knife");

    }
}

export const destroy = async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        const shortUrl = await urlModel.findByIdAndDelete({ _id: id })
        if (shortUrl) {
            res.status(200).send('Requested URL deleted successfully')
        } else {
            res.status(404).send('URL dont exist')

        }
    } catch (error) {
        res.status(500).send("Kill you with a knife");

    }
}