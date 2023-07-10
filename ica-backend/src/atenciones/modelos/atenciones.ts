import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Atencion extends Model {
  static put(): Promise<Atencion[]> {
    throw new Error('Method not implemented.');
  }
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
