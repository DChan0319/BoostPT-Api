import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    testHello(): string {
        return 'Hello World!';
    };
};
