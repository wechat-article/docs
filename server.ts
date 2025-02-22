//@ts-nocheck

import { serveDir, serveFile } from "@std/http/file-server";

Deno.serve((req: Request) => {
    return serveDir(req, {
        fsRoot: "docs/.vitepress/dist",
        // headers: ['Cache-Control: max-age=31536000,immutable']
    });
});
