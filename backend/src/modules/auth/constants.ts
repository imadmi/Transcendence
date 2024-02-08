import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export const JWT_SECRET = configService.get('JWT_SECRET');
export const GOOGLE = configService.get('GOOGLE');
export const URL = configService.get('URL');
