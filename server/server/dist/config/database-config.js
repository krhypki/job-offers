"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'sqlite',
    database: 'db.sqlite',
    entities: ['dist/entities/*.entity.js'],
    synchronize: true,
    migrations: ['dist/migrations/*.js'],
    migrationsRun: true,
};
exports.default = config;
//# sourceMappingURL=database-config.js.map