import { Injectable } from "@nestjs/common";
import { InjectModel, ReturnModel } from "@skypress/nestjs-dynamodb";
import { Preference } from "../entity/prefrence.schema";


const returnModel = ReturnModel<Preference>()

@Injectable()
export class PreferencesService {
    constructor(
        @InjectModel(Preference)
        private readonly preferenceModel: typeof returnModel
    ){}

    async findByName(id: string): Promise<Preference>{
        return this.preferenceModel.findById(id);
    }
}