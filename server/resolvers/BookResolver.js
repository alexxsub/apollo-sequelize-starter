module.exports = {
    Query: {
        Books: async (_, args, {db}) => {
            console.log(db)
            return db.Books.findAll()
        }
    }
}