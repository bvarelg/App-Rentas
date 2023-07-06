import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { AtencionesModule } from './atenciones/atenciones.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootpass',
      database: 'impuestos',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsuariosModule,
    RolesModule,
    AutenticacionModule,
    AtencionesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
