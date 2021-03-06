import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from "./app/app.component";

import router from './app.router';
import { HomeComponent } from "./app/home.component";
import { NotFoundComponent } from "./app/not-found.component";

@NgModule({
	imports: [
		BrowserModule,
		NgbModule.forRoot(),
		router
	],
	declarations: [
		AppComponent,
		HomeComponent,
		NotFoundComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
