import {
  get_businesses,
  update_business,
  delete_business,
  get_Business_By_Department,
} from "../../utils/business/index.js";
import { business_actions } from "./actions.js";

export const business_module = (io, socket) => {
  socket.on(business_actions.get_business, async (payload, callback) => {
    try {
      let response = await get_businesses();
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

  socket.on(business_actions.update_business, async (payload, callback) => {
    try {
      let response = await update_business(payload);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

  socket.on(business_actions.delete_business, async (payload, callback) => {
    try {
      let response = await delete_business(payload);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

  socket.on(
    business_actions.get_Business_By_Department,
    async (payload, callback) => {
      try {
        const response = await get_Business_By_Department(payload.department);

        console.log("Response from get_Business_By_Department: ", response);

        if (response.length === 0) {
          callback({
            message: "No businesses found for the given department",
            data: [],
          });
        } else {
          callback({ message: "Success", data: response });
        }
      } catch (error) {
        callback({ message: error.message });
      }
    }
  );
};
