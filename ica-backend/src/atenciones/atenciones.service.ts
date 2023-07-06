import { Injectable } from '@nestjs/common';
import { Atencion } from './modelos/atenciones';
import { InjectModel } from '@nestjs/sequelize';
import { AtencionDto } from './dto/atencion-dto';

@Injectable()
export class AtencionesService {
  constructor(
    @InjectModel(Atencion)
    private readonly atencionModel: typeof Atencion,
  ) {}

  insertarAtencion(dto: AtencionDto): Promise<Atencion> {
    return this.atencionModel.create({
      nombreContribuyente: dto.nombreContribuyente,
      idContribuyente: dto.idContribuyente,
      razonSocial: dto.razonSocial,
      fechaAtencion: dto.fechaAtencion,
      tipoAtencion: dto.tipoAtencion,
      canalAtencion: dto.canalAtencion,
      descripcionAtencion: dto.descripcionAtencion,
    });
  }

  listadoAtenciones(): Promise<Atencion[]> {
    return this.atencionModel.findAll();
  }
}
