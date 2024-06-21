import { Controller, Get } from '@nestjs/common'

@Controller('mattingImg')
export class MattingImgController {
    constructor() { }

    @Get('test')
    mattingImg() {
        return '22'
    }
 }