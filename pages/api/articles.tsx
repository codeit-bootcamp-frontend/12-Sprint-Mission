// pages/api/articles.ts
import type { NextApiRequest, NextApiResponse } from "next";

async function fetchArticles(page: number, pageSize: number, orderBy: string) {
    const response = await fetch(
        `https://panda-market-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch articles");
    }

    const data = await response.json();
    return data;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { page = 1, pageSize = 10, orderBy = "recent" } = req.query;

    try {
        const articles = await fetchArticles(
            Number(page),
            Number(pageSize),
            orderBy as string
        );
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch articles" });
    }
}
