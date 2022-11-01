import { DataGateway } from './Hyperion.Server.DataGateway';
const sqlite3 = require('sqlite-async');

export class SqliteGateway extends DataGateway {
    constructor() {
        super('Sqlite');
    }

    unload() {
        this.db.close();
    }

    async getDeviceModels() {
        return require('./synthetic-data/device-models.json');
    }

    async getDevicesInModel(deviceModelId) {
        this.db = await sqlite3.open(
            './server/database/sample.db',
            sqlite3.OPEN_READONLY
        );
        console.log('Connected to the transurban database.');
        let sql = `SELECT * FROM sensors`;

        const rows = await this.db.all(sql, []);
        rows.map((i) => {
            i.position = { x: i.x, y: i.y, z: i.z };
        });
        return {
            deviceModelId: 'd370a293-4bd5-4bdb-a3df-376dc131d44c',
            deviceInfo: rows,
        };
    }

    async getAggregates(
        deviceId,
        propertyId,
        startSecond,
        endSecond,
        resolution
    ) {
        this.db = await sqlite3.open(
            './server/database/sample.db',
            sqlite3.OPEN_READONLY
        );
        console.log('Connected to the transurban database.');
        let sql = `select * from sensor_logs_day where device = ? and type = "MotorCurrent"`;

        const rows = await this.db.all(sql, [deviceId]);
        const tims = rows.map((i) => {
            return new Date(i.date1).getTime();
        });

        const mins = rows.map((i) => i.min);
        const maxs = rows.map((i) => i.max);
        const avgs = rows.map((i) => i.avg);
        const sums = rows.map((i) => i.count);
        return {
            timestamps: tims,
            count: sums,
            min: mins,
            max: maxs,
            avg: avgs,
            sum: sums,
            stdDev: avgs,
        };
    }
}
