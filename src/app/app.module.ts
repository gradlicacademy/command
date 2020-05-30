import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MysqlComponent } from './mysql/mysql.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TitleComponent } from './title/title.component';
import { LinksComponent } from './links/links.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MysqlComponent,
    ToolbarComponent,
    TitleComponent,
    LinksComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
