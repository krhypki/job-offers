"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoGenerated1710767904236 = void 0;
class AutoGenerated1710767904236 {
    constructor() {
        this.name = 'AutoGenerated1710767904236';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "job_offer" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "company" varchar NOT NULL, "description" varchar NOT NULL, "location" varchar NOT NULL, "sallary" integer NOT NULL,"daysAgo" integer NOT NULL, "companyBadge" varchar NOT NULL, "duration" varchar NOT NULL, "qualifications" text array NOT NULL, "reviews" text array NOT NULL)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "job_offer"`);
    }
}
exports.AutoGenerated1710767904236 = AutoGenerated1710767904236;
//# sourceMappingURL=1710767904236-auto-generated.js.map