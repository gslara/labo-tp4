import _MySQL from 'promise-mysql';
import Bluebird from 'bluebird';
import config from '../Config/MySQL.js';

class MySQL{

    pool : _MySQL.Pool;

    constructor(){
        this.crearPool();
    }

    private async crearPool(){
        this.pool = await _MySQL.createPool(config);
    }

    async connect() {
        return this.pool.getConnection();
    }
}

const mySQL = new MySQL();
export default mySQL;