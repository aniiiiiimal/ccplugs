import { findByProps } from "@cumcord/modules/webpack";
import { instead } from "@cumcord/patcher";
                                    
const isSpam = instead("isSpam", findByProps("isSpam"), () => {return false});

export default (data) => {
  return {
    onUnload() {
      isSpam()
    }
  };
};
