import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { SplitsModule } from './modules/splits/splits.module';
import { getFirestore } from 'firebase/firestore';
import { SessionsModule } from './modules/sessions/sessions.module';
import { ExercisesModule } from './modules/exercises/exercises.module';
import { WorkoutsModule } from './modules/workouts/workouts.module';
import { SettingsModule } from './modules/settings/settings.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ SettingsModule, SplitsModule, SessionsModule, ExercisesModule, WorkoutsModule, UserModule,
    ConfigModule.forRoot({
      isGlobal: true, // Make the ConfigModule available globally
      envFilePath: ['.env.development', '.env.production'], // Specify the environment files
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore();