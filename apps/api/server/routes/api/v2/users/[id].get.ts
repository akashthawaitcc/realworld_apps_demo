export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');

    const user = await usePrisma().user.findUnique({
        where: {
            id
        }
    })

    return user;
});