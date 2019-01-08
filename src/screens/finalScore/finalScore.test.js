import FinalScore from './finalScore';
import Registration from '../registration/registration';


describe('FinalScore', () => {
  it('-draw- is a function', () => {
    expect(FinalScore.draw).toBeInstanceOf(Function);
  });

  it('-draw- insert correct template into the document', () => {
    Registration.draw();
    FinalScore.draw();
    expect(document.querySelector('body #scoreboard #scoreboardTableBody')).not.toBe(null);
  });

  it('-startNewGame- is a function', () => {
    expect(FinalScore.startNewGame).toBeInstanceOf(Function);
  });

  it('-createScoreList- is a function', () => {
    expect(FinalScore.createScoreList).toBeInstanceOf(Function);
  });

  it('-createScoreList- insert data from storage into the table', () => {
    Registration.draw();
    FinalScore.draw();
    FinalScore.createScoreList();
    expect(document.querySelector('body #scoreboardTableBody tr')).not.toBe('null');
  });
});
