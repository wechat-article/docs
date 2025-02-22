//@ts-nocheck

import { serveDir, serveFile } from "@std/http/file-server";

Deno.serve((req: Request) => {
    const pathname = new URL(req.url).pathname;

    let headers = []
    if (pathname.startsWith('/assets/')) {
        headers = ['Cache-Control: max-age=31536000,immutable']
    }
    return serveDir(req, {
        fsRoot: ".vitepress/dist",
        headers: headers,
    });
});
