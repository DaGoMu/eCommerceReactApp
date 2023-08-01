import userModel from "../models/userModel.js";

export const getUsersController = async (req, res) => {
  try {
    const user = await userModel.find({});

    res.status(200).send({
      success: true,
      countTotal: user.length,
      message: "Products Listed",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error getting all entries",
      error: error.message,
    });
  }
};
