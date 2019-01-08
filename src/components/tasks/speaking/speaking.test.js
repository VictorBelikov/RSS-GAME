import SpeakingTask from './speaking';
import Task from '../../../screens/task/task';
import GGS from '../../../models/GlobalGameState';

describe('class SpeakingTask', () => {
  beforeEach(() => {
    Task.draw();
    GGS.taskBtnAnswer = document.getElementById('btnAnswer');
  });

  it('-generateTemplate- is a function', () => {
    expect(SpeakingTask.generateTemplate).toBeInstanceOf(Function);
  });

  it('-generateTemplate- returns an object with 2 values - template and answer', () => {
    expect(typeof SpeakingTask.generateTemplate()).toBe('object');
    expect('answer' in SpeakingTask.generateTemplate()).toBe(true);
    expect('template' in SpeakingTask.generateTemplate()).toBe(true);
    expect(Object.keys(SpeakingTask.generateTemplate()).length).toBe(2);
  });

  it('-generateTemplate- generates template string with <input id="speakingAnswer">', () => {
    expect(SpeakingTask.generateTemplate().template.includes('id="speakingAnswer"')).toBe(true);
  });

  it('-generateTemplate- generates template string with <button id="btnSpeaking">', () => {
    expect(SpeakingTask.generateTemplate().template.includes('id="btnSpeaking"')).toBe(true);
  });
});
