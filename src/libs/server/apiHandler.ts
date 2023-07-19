import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type method = "GET" | "POST" | "DELETE";

interface ConfigType {
    methods: method[];
    handler: (req: NextApiRequest, res: NextApiResponse) => void;
}

export default function withHandler({
    methods,
    handler,
    isPrivate
}: ConfigType) {

    return async function (
        req: NextApiRequest, res: NextApiResponse
    ): Promise<any> {

		// 정의한 method 가 아닌 경우 종류
        if(req.method && !methods.includes(req.method as any)){
            return res.status(405).end();
        }

        try{
            await handler(req, res)
        } catch(error) {
            console.log(error)
            return res.status(500).json({ error })
        }
    }
}
