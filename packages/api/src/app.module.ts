import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { TransactionModule } from "./modules/transaction/transaction.module";
import { PUBLIC_FOLDER } from "@env/config";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: PUBLIC_FOLDER,
      renderPath: "/",
      exclude: ["/v1/*"]
    }),
    TransactionModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
