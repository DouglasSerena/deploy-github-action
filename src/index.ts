import { Action } from './action';
import { Github } from './core/github/github';

const github = new Github();

try {
  new Action(github);
} catch (err) {
  const error = err as Error;

  github.core.debug(`Message: ${error.message}\n${error.stack}`);
  github.core.setFailed(error.message);
}
