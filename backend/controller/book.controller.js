import { Book } from "../models/Book.models.js";
const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
    // console.log("kch choti moti dikkat he thik kro jaldi se");
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
};
export default getBook;
