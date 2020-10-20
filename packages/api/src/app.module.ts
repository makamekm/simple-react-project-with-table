import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { TransactionModule } from "./modules/transaction/transaction.module";
import { PUBLIC_FOLDER } from "@env/config";
import { NextMiddleware } from "./modules/next/next.middleware";
import { NextModule } from "./modules/next/next.module";

@Module({
  imports: [
    NextModule,
    // ServeStaticModule.forRoot({
    //   rootPath: PUBLIC_FOLDER,
    //   renderPath: "/",
    //   exclude: ["/v1/*"],
    // }),
    TransactionModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // handle scripts
    consumer.apply(NextMiddleware).forRoutes({
      path: "_next*",
      method: RequestMethod.GET
    });

    // handle other assets
    consumer.apply(NextMiddleware).forRoutes({
      path: "images/*",
      method: RequestMethod.GET
    });

    consumer.apply(NextMiddleware).forRoutes({
      path: "favicon.ico",
      method: RequestMethod.GET
    });
  }
}
