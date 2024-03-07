import shortid from 'shortid';
import debug from 'debug';

import { CreateUserDto } from '../dto/create-user.dto';
import { PatchUserDto } from '../dto/patch-user.dto';
import { PutUserDto } from '../dto/put-user.dto';

const log: debug.IDebugger = debug('app:in-memory-dao');

class UsersDao {
    users: Array<CreateUserDto> = []

    constructor() {
        log('Created new instance of UsersDao');
    }
}

export default new UsersDao();