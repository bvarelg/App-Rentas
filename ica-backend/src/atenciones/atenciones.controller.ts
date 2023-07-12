import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AtencionesService } from './atenciones.service';
import { Atencion } from './modelos/atenciones';
import { AtencionDto, UpdateAtencionDto } from './dto/atencion-dto';

@Controller('atenciones')
export class AtencionesController {
  AtencionesService: any;
  constructor(private service: AtencionesService) {}

  @Get()
  devolverTodasLasAtenciones(): Promise<Atencion[]> {
    return this.service.listadoAtenciones();
  }

  @Post()
  insertarAtencion(@Body() dto: AtencionDto) {
    return this.service.insertarAtencion(dto);
  }

  @Put('/:id')
  update(
    @Body() updateAtencionDto: UpdateAtencionDto,
    @Param('id') id: number,
  ): Atencion {
    return this.service.update(updateAtencionDto, id);
  }
}
