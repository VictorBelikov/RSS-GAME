import template from './task.template';
import './task.css';
import GGS from '../../models/GlobalGameState';
import { scrTaskShow } from '../../utils/scrHandlers';
import tasks from '../../assets/data/tasks';
import MathTask from '../../components/tasks/math/math';
import ComparisonTask from '../../components/tasks/comparison/comparison';
import CountryCapitalTask from '../../components/tasks/country-capital/country-capital';
import TranslateTask from '../../components/tasks/translate/translate';
import MissingLetterTask from '../../components/tasks/missing-letter/missing-letter';
import SequenceNumTask from '../../components/tasks/sequence-num/sequence-num';
import SequenceDayTask from '../../components/tasks/sequence-day/sequence-day';
import GeometrFigTask from '../../components/tasks/geometric-figure/geometric-figure';
import GeometrVertTask from '../../components/tasks/geometric-vert/geometric-vert';
import SeasonsTask from '../../components/tasks/seasons/seasons';
import ObjectNumsTask from '../../components/tasks/object-nums/object-nums';
import ListeningTask from '../../components/tasks/listening/listening';
import SpeakingTask from '../../components/tasks/speaking/speaking';
import DragDropLettersTask from '../../components/tasks/dnd-letters/dnd-letters';
import DragDropNumsTask from '../../components/tasks/dnd-nums/dnd-nums';


export default class Task {
  static draw() {
    document.body.insertAdjacentHTML('beforeend', template);
    GGS.taskScr = document.getElementById('taskscr');
    GGS.taskScrContent = document.getElementById('taskContent');
  }

  static invokeTask(task) {
    const result = task.generateTemplate();
    GGS.taskScrContent.innerHTML = result.template;
    task.isCorrectAnswer(result.answer);
  }

  static generateTaskType() {
    Task.show();
    GGS.taskBtnAnswer = document.getElementById('btnAnswer');
    const arr = tasks.types;
    const task = arr[Math.floor(Math.random() * arr.length)];
    // const task = arr[9];

    switch (task) {
      case 'math': // 0
        GGS.taskBtnAnswer.style.display = 'inline-block';
        Task.invokeTask(MathTask);
        break;
      case 'comparison': // 1
        GGS.taskBtnAnswer.style.display = 'inline-block';
        Task.invokeTask(ComparisonTask);
        break;
      case 'translate': // 2
        GGS.taskBtnAnswer.style.display = 'inline-block';
        Task.invokeTask(TranslateTask);
        break;
      case 'country-capital': // 3
        GGS.answerScrShow = true;
        GGS.taskBtnAnswer.style.display = 'none';
        Task.invokeTask(CountryCapitalTask);
        break;
      case 'missing-letter': // 4
        GGS.taskBtnAnswer.style.display = 'inline-block';
        Task.invokeTask(MissingLetterTask);
        break;
      case 'sequence-num': // 5
        GGS.taskBtnAnswer.style.display = 'inline-block';
        Task.invokeTask(SequenceNumTask);
        break;
      case 'sequence-day': // 6
        GGS.answerScrShow = true;
        GGS.taskBtnAnswer.style.display = 'none';
        Task.invokeTask(SequenceDayTask);
        break;
      case 'geometric-figure': // 7
        GGS.answerScrShow = true;
        GGS.taskBtnAnswer.style.display = 'none';
        Task.invokeTask(GeometrFigTask);
        break;
      case 'geometric-vert': // 8
        GGS.answerScrShow = true;
        GGS.taskBtnAnswer.style.display = 'none';
        Task.invokeTask(GeometrVertTask);
        break;
      case 'seasons': // 9
        GGS.answerScrShow = true;
        GGS.taskBtnAnswer.style.display = 'none';
        Task.invokeTask(SeasonsTask);
        break;
      case 'object-nums': // 10
        GGS.taskBtnAnswer.style.display = 'inline-block';
        Task.invokeTask(ObjectNumsTask);
        break;
      case 'listening': // 11
        GGS.taskBtnAnswer.style.display = 'inline-block';
        Task.invokeTask(ListeningTask);
        break;
      case 'speaking': // 12
        GGS.taskBtnAnswer.style.display = 'inline-block';
        Task.invokeTask(SpeakingTask);
        break;
      case 'dnd-nums': // 13
        GGS.taskBtnAnswer.style.display = 'inline-block';
        Task.invokeTask(DragDropNumsTask);
        break;
      case 'dnd-letters': // 14
        GGS.taskBtnAnswer.style.display = 'inline-block';
        Task.invokeTask(DragDropLettersTask);
        break;
      default:
        throw new TypeError('Incorrect type of the task!');
    }
  }

  static show() {
    scrTaskShow();
  }
}
