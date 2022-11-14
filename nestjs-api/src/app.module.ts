import { Module } from '@nestjs/common';
import { DynamoDBModule } from '@skypress/nestjs-dynamodb';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreferencesService } from './modules/prefrences/service/preference.service';
import { PreferencesController } from './preference.controller';

@Module({
  imports: [
    DynamoDBModule.forRoot({
      AWSConfig: {
        region: 'local',
        accessKeyId: 'null'
      },
      dynamoDBOptions: {
        endpoint: 'localhost:8000',
        sslEnabled: false,
        region: 'local-env'
      }
    }),
    

  ],
  controllers: [AppController,
  PreferencesController],
  providers: [AppService,
  PreferencesService],
})
export class AppModule {}
