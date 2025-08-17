import { testDbQuery } from "../models/userModel.js";
import { sendResponse, sendError } from "../utils/apiResponse.js";

export const getUsers = async (req, res) => {
  try {
    const result = await testDbQuery();
    sendResponse(res, "OK", "Users fetched successfully", result);
  } catch (err) {
    sendError(res, "Failed to fetch users", err);
  }
};
