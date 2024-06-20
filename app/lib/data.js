import { User, Product } from "./models";
import { connectToDB } from "./utils";

const ITEMS_PER_PAGE = parseInt(process.env.ITEMS_PER_PAGE);

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  try {
    connectToDB();

    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));

    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Faild To Fetch Users!");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  try {
    connectToDB();

    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));

    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Faild To Fetch Products!");
  }
};
