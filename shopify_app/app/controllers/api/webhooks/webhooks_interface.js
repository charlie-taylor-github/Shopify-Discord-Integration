import manager from "./webhooks_manager.js";

async function getAll(graphql, topic) {
    const { error, ids } = await manager.getAll(graphql, topic);
    return { error, ids };
}

async function createOne(graphql, topic) {
    const { error } = await manager.createOne(graphql, topic);
    return { error };
}

async function deleteAll(graphql, topic) {
    const { error, ids } = await manager.getAll(graphql, topic);
    if (error) return { error };
    for (const id of ids) {
        const { error: deleteError } = await manager.deleteOne(graphql, id);
        if (deleteError) return { error: deleteError };
    }
    return {};
}

export default { getAll, createOne, deleteAll };
