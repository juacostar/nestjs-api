import { Body, Controller, Post } from "@nestjs/common";
import { GetRestaurantDTO } from "./dto/getRestaurantDTO";
import { PreferencesService } from "./modules/prefrences/service/preference.service";


@Controller('preferences')
export class PreferencesController {

    preferencesService: PreferencesService;

    @Post('/restaurant')
    getRestaurant(@Body() getRestaurantDTO:GetRestaurantDTO){
        return this.preferencesService.findByName(getRestaurantDTO.preference);
    }
}