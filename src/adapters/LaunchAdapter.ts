import { Launch, LaunchDTO, LaunchDTOSchema } from '../types/Launch';
import { ZodError } from 'zod';

export const adaptLaunch = (data: unknown): Launch => {
  try {
    const dto: LaunchDTO = LaunchDTOSchema.parse(data);

    return {
      id: dto.id,
      name: dto.name,
      rocket: dto.rocket ?? 'Desconocido',
      date_utc: dto.date_utc,
      success: dto.success ?? undefined,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      console.error('Error de validación en LaunchDTO:', error.errors);
    } else {
      console.error('Error inesperado en adaptLaunch:', error);
    }

    throw new Error('LaunchDTO inválido');
  }
};
