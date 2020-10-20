import { NestFactory } from "@nestjs/core";
import * as path from "path";
import { AppModule } from "./app.module";
import { CORS } from "@env/config";
import { NextModule } from "./modules/next/next.module";

export async function bootstrapAPI() {
  const app = await NestFactory.create(AppModule, { cors: CORS });
  const port = process.env.PORT || 5000;

  app
    .get(NextModule)
    .prepare({
      dir: path.resolve(process.cwd(), "../ui")
      // conf: {
      //   basePath: "/",
      // },
    })
    .then(() => {
      app.listen(port, () => {
        console.log("Server is listening...", port);
      });
    });
}
