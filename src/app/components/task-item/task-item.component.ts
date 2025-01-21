import { Component, Input } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() tarefa!: Tarefa;

  faTimes = faTimes
}
