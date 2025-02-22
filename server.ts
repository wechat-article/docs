//@ts-nocheck

import { serveDir, serveFile } from "@std/http/file-server";

Deno.serve((req: Request) => {
    return serveDir(req, {
        fsRoot: "docs/.vitepress/dist",
    });
});
