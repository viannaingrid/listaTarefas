import { Tarefa } from './../../../Tarefa';
import { Component, Input, output, EventEmitter } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() tarefa!: Tarefa;
  @output() onDeleteTask = new EventEmitter<Tarefa>();

  faTimes = faTimes

  onDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa);
  }
}
