import { Action } from './action';
import { Github } from './core/github/github';

async function main() {
  const github = new Github();

  try {
    await new Action(github).exec();
  } catch (err) {
    const error = err as Error;

    github.core.info(`Message: ${error.message}\n${error.stack}`);
    github.core.setFailed(error.message);
  }
}

main();
