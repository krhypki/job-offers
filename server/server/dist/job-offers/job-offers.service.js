"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobOffersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const job_offer_entity_1 = require("../entities/job-offer.entity");
const typeorm_2 = require("typeorm");
let JobOffersService = class JobOffersService {
    constructor(repo) {
        this.repo = repo;
    }
    async findAll() {
        const jobOffers = await this.repo.find();
        return jobOffers;
    }
    async findById(id) {
        const jobOffer = await this.repo.findOne({ where: { id } });
        return jobOffer;
    }
    async findByQuery(query) {
        const jobOffers = await this.repo.find({
            where: [
                { name: (0, typeorm_2.Like)(`%${query}%`) },
                { qualifications: (0, typeorm_2.Like)(`%${query}%`) },
            ],
        });
        return jobOffers;
    }
};
exports.JobOffersService = JobOffersService;
exports.JobOffersService = JobOffersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(job_offer_entity_1.JobOffer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JobOffersService);
//# sourceMappingURL=job-offers.service.js.map