export const doesDocumentExist = async documentReference => {
    return await documentReference
        .get()
        .then(function(doc) {
            if (doc.exists) {
                // don't update
                return true;
            } else {
                // update
                // doc.data() will be undefined in this case
                return false;
            }
        })
        .catch(function(error) {
            if (error) {
                throw new Error(`
          There was an error fetching the document:
          ${error.message}
        `);
            }
        });
};
