module.exports = {
    Query: {
        Books: async (_, args, { books }) => {
            return books
        }
    }
}