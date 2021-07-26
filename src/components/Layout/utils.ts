import { makeSubquery } from "../../hooks/media";

export const isDesktopLayout = makeSubquery("md");
export const contentMaxWidth = "min(1350px, 95vw)";
