import Task from './task';
import GGS from '../../models/GlobalGameState';

describe('Task', () => {
  it('-draw- is a function', () => {
    expect(Task.draw).toBeInstanceOf(Function);
  });

  it('-draw- inserts correct template into the document', () => {
    Task.draw();
    expect(document.querySelector('#taskscr #taskContent')).not.toBe(null);
  });

  it('-generateTaskType- is a function', () => {
    expect(Task.generateTaskType).toBeInstanceOf(Function);
  });

  it('-generateTaskType- set <button id="btnAnswer"> element into the global game state', () => {
    Task.draw();
    Task.generateTaskType();
    expect(GGS.taskBtnAnswer.id).toEqual('btnAnswer');
  });

  it('-generateTaskType- set <div id="taskContent"> element into the global game state', () => {
    Task.draw();
    Task.generateTaskType();
    expect(GGS.taskScrContent.id).toEqual('taskContent');
  });

  it('-generateTaskType- set <div id="taskscr"> element into the global game state', () => {
    Task.draw();
    Task.generateTaskType();
    expect(GGS.taskScr.id).toEqual('taskscr');
  });
});
