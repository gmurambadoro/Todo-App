import {COLLECTION_NAME_TASKS, fire} from "../config/firebase-config";

export const findManyTasks = async () => {
    const snapshot = await fire.firestore().collection(COLLECTION_NAME_TASKS).get()

    const documents = [];

    snapshot.forEach(doc => {
        documents.push(doc.data());
    });

    return documents;
};

export const createOneTask = async ({ name, description, createdAt = new Date() }) => {
    await fire.firestore().collection(COLLECTION_NAME_TASKS).add({
        name,
        description,
        createdAt,
    });
};