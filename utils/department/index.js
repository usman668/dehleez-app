import { Department } from "../../models/department_model.js";

// Department Get:-
export const get_departments = async () => {
  try {
    const departmentsGet = await Department.aggregate([
      {
        $match: {},
      },
    ]);
    return departmentsGet;
  } catch (error) {
    console.log(error.message);
  }
};

// Department Delete:-
export const delete_department = async (payload) => {
  try {
    const deletedDepartment = await Department.findByIdAndDelete({
      _id: payload.id,
    });
    return { message: "Business deleted successfully", deletedDepartment };
  } catch (error) {
    console.log(error.message);
  }
};

// Update Department:-
export const update_department = async (payload) => {
  try {
    const oldData = {
      name: payload.name,
    };
       const newData = await Department.findByIdAndUpdate(
      { _id: payload.id },
      oldData,
      { new: true }
    );
    return newData;
  } catch (error) {
    console.log(error.message);
  }
};
