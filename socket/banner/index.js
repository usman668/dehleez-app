import { get_banners } from "../../utils/banner/index.js";
import { banner_actions } from "./actions.js";

// Banner
export const banner_module = (io, socket) => {
  socket.on(banner_actions.get_banners, async (payload, callback) => {
    try {
      let response = await get_banners();
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });
};

