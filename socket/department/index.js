import {
  get_departments,
  delete_department,
  update_department,
} from "../../utils/department/index.js";
import { department_actions } from "./actions.js";

// Department
export const department_module = (io, socket) => {
  socket.on(department_actions.get_departments, async (payload, callback) => {
    try {
      let response = await get_departments();
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

  socket.on(department_actions.update_department, async (payload, callback) => {
    try {
      let response = await update_department(payload);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

  socket.on(department_actions.delete_department, async (payload, callback) => {
    try {
      let response = await delete_department(payload);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });
};
