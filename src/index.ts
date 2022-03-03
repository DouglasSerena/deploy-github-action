import core from '@actions/core';
import github from '@actions/github';
import { onTry } from './utils/on-try';

async function main() {
  const [success, error] = await onTry(() => {
    console.log(core.getInput('firebase-id'));

    const time = new Date().toTimeString();
    core.setOutput('time', time);

    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
  });

  if (!error) {
    return;
  }

  core.setFailed(error.message);
}

main();
