import { Component, Input, input } from '@angular/core';
import { Tarefa } from '../../../Tarefa';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input tarefa!:Tarefa;
}
