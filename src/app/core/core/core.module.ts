import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// DevExtreme localization

declare let require: any;
import { locale, loadMessages } from 'devextreme/localization';
import 'devextreme-intl';
let messagesRu = require("devextreme/localization/messages/ru.json");
loadMessages(messagesRu);
locale('ru');

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule { }
