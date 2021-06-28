import GameField from './GameField/GameField';
import Goblin from './Goblin/Goblin';

export default function demo(value) {
  return value;
}
const play = new GameField('.hole-game');
play.generate(4);

const goblin = new Goblin('.hole-game');
goblin.randomHole();
