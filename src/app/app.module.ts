import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";

@NgModule({
  imports: [BrowserModule],//这个和每个在浏览器中运行应用都需要它。
  declarations: [AppComponent],//应用的唯一组件，它同时也是...
  bootstrap: [AppComponent]//根组件，Angular 创建它并插入index.html宿主页面。
})
export class AppModule {
}
