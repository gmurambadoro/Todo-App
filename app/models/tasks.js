import {TASKS_COLLECTION, fire} from "../config/firebase-config";

export const findManyTasks = async () => {
    const snapshot = await fire.firestore().collection(TASKS_COLLECTION).get();

    const documents = [];

    snapshot.forEach(doc => {
        documents.push({
            id: doc.id,
            ...doc.data(),
        });
    });

    return documents;
};

export const createOneTask = async ({ name, description, createdAt = new Date() }) => {
    await fire.firestore().collection(TASKS_COLLECTION).add({
        name,
        description,
        createdAt,
    });
};