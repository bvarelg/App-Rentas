import { Module } from '@nestjs/common';
import { AtencionesController } from './atenciones.controller';
import { AtencionesService } from './atenciones.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Atencion } from './modelos/atenciones';

@Module({
  imports: [SequelizeModule.forFeature([Atencion])],
  controllers: [AtencionesController],
  providers: [AtencionesService],
})
export class AtencionesModule {}
