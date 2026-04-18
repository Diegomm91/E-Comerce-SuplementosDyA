import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    // Intentamos conectar al iniciar el módulo
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}