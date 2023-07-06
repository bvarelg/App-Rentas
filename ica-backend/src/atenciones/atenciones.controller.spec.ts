import { Test, TestingModule } from '@nestjs/testing';
import { AtencionesController } from './atenciones.controller';

describe('AtencionesController', () => {
  let controller: AtencionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtencionesController],
    }).compile();

    controller = module.get<AtencionesController>(AtencionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
