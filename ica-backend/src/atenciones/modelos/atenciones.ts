import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Atencion extends Model {
  @Column
  nombreContribuyente: string;
  @Column
  idContribuyente: number;
  @Column
  razonSocial: string;
  @Column
  fechaAtencion: string;
  @Column
  tipoAtencion: string;
  @Column
  canalAtencion: string;
  @Column
  descripcionAtencion: string;
}
