import { Attribute, RangeKey, Table } from "@skypress/nestjs-dynamodb";
import * as nanoid from 'nanoid';


@Table('preference')
export class Preference{

    @RangeKey()
    id: string

    @Attribute()
    restaurant: string
}