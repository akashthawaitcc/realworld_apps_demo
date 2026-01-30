import { defineEventHandler, getRouterParam } from "h3";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const body = await readBody(event);

    const post = await usePrisma().post.create({
        data: {
            ...body,
            userId: id
        }
    });
   
    return {
        id: post.id
    };
});