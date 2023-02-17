import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyContainerComponent } from './components/empty-container/empty-container.component';



@NgModule({
    declarations: [
        EmptyContainerComponent
    ],
    exports: [
        EmptyContainerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
