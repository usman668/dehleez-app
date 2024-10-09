import { banner_module } from "./banner/index.js";
import { business_module } from "./business/index.js";
import { department_module } from "./department/index.js";

export const socket_modules = async (io, socket) => {
  try {
    // Banner module.
    banner_module(io, socket);
    console.log(`User Connected`);

    // Department module.
    department_module(io, socket);
    console.log(`User Connected`);

    // Business module.
    business_module(io, socket);
    console.log(`User Connected`);
  } catch (error) {}
};
