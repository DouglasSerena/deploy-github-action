import core from '@actions/core';
import github from '@actions/github';
import { onTry } from './utils/on-try';

async function main() {
  const [success, error] = await onTry(() => {
    console.log(core.getInput('firebase-id'));

    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
  });

  if (success || !error) {
    return;
  }

  core.setFailed(error.message);
}

main();
