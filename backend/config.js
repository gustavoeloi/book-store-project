import "dotenv/config";

export const PORT = process.env.PORT;

export const mongoDBURL = `mongodb+srv://gustavooeloi:${process.env.PASSWORD_MONGODB}@storebookdb.ppjtvmt.mongodb.net/books?retryWrites=true&w=majority&appName=StoreBookDB`;
