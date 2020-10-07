import { Injectable } from "@nestjs/common";

@Injectable()
export class TransactionService {
  async get_list(): Promise<any[]> {
    return [];
  }

  async add(query: {
    from_account_id: number;
    to_account_id: number;
    amount: number;
  }) {
    return -1;
  }
}
