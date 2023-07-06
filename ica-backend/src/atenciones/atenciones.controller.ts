import { Body, Controller, Get, Post } from '@nestjs/common';
import { AtencionesService } from './atenciones.service';
import { Atencion } from './modelos/atenciones';
import { AtencionDto } from './dto/atencion-dto';

@Controller('atenciones')
export class AtencionesController {
  constructor(private service: AtencionesService) {}

  @Get()
  devolverTodasLasAtenciones(): Promise<Atencion[]> {
    return this.service.listadoAtenciones();
  }

  @Post()
  insertarAtencion(@Body() dto: AtencionDto) {
    return this.service.insertarAtencion(dto);
  }
}
