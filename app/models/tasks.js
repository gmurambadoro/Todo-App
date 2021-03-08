import {TASKS_COLLECTION, fire} from "../config/firebase-config";

export const findTasks = async () => {
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

export const createTask = async ({ name, description, done, createdAt = new Date() }) => {
    await fire.firestore().collection(TASKS_COLLECTION).add({
        name,
        description,
        done,
        createdAt,
    });
};

export const deleteTask = async (id) => {
    return await fire.firestore().collection(TASKS_COLLECTION).doc(id).delete();
};