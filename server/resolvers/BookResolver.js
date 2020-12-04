module.exports = {
    Query: {
        Books: async (_, args, { db }) => {
    
            return db.Books.findAll()
        }
    }
}