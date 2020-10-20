import { IncomingMessage, ServerResponse } from "http";
import { Controller, Get, Req, Res } from "@nestjs/common";
import { NextService } from "./next.service";

@Controller()
export class NextController {
  constructor(private readonly next: NextService) {}

  @Get()
  public async showHome(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse
  ) {
    // this will render `pages/index.tsx`!
    await this.next.render("/index", req, res);
  }
}
