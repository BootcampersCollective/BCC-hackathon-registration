import { db } from '@/firebase.init';
import { doesDocumentExist } from '@/utils';

export const mutations = {
    async createUserProfile(payload) {
        const { uid, profileInfo } = payload;

        let existingProfileReference = db.collection('profiles').doc(uid);

        if (!(await doesDocumentExist(existingProfileReference))) {
            db.collection('profiles')
                .doc(uid)
                .set(profileInfo)
                .then(() => {
                    console.log('User profile successfully created!');
                })
                .catch(error => {
                    if (error) {
                        throw new Error(`
                            There was an error creating your profile.
                            ${error.message}`);
                    }
                });
        }
    },
};
