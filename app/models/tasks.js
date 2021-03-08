import {COLLECTION_TASKS, fire} from "../config/firebase-config";

export const findManyTasks = async () => {
    let documents = [];

    await fire.firestore().collection(COLLECTION_TASKS).onSnapshot(snapshot => {
        const docs =  snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        documents = [...docs];
    });

    return documents;
};

export const createOneTask = async ({ task }) => {
    await fire.firestore().collection(COLLECTION_TASKS).add(task);
};