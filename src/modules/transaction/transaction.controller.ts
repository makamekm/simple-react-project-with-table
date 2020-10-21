import {
  Controller,
  Get,
  Post,
  Body,
  Header,
  Res,
  HttpCode,
  HttpStatus
} from "@nestjs/common";
import { TransactionService } from "./transaction.service";
import puppeteer from "puppeteer";
import { Readable } from "stream";
import { Response } from "express";

@Controller("api/v1/transaction")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get("ping")
  ping(): string {
    return "pong";
  }

  getReadableStream(buffer: Buffer): Readable {
    const stream = new Readable();

    stream.push(buffer);
    stream.push(null);

    return stream;
  }

  @Get("pdf")
  @HttpCode(HttpStatus.OK)
  @Header("Content-Type", "application/pdf")
  async pdf(@Res() res: Response) {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${process.env.PORT || 5000}`, {
        waitUntil: "networkidle2"
      });
      const buffer = await page.pdf({
        format: "A4"
      });
      const stream = this.getReadableStream(buffer);
      await browser.close();
      res.set("Content-Disposition", "attachment; filename=demo.pdf");
      res.set("Content-Length", buffer.length.toString());
      return stream.pipe(res);
    } catch (error) {
      console.error(error);
    }
    return null;
  }

  @Post("add")
  async add(@Body() data: Parameters<TransactionService["add"]>[0]) {
    return this.transactionService.add(data);
  }

  @Get("list")
  async list() {
    return this.transactionService.get_list();
  }
}
