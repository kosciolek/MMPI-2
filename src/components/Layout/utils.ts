import { makeSubquery } from "../../hooks/media";

export const isDesktopLayout = makeSubquery("lg");
export const contentWidth = "min(1350px, 100vw)";
