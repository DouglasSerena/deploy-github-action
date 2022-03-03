import * as core from '@actions/core';
import * as github from '@actions/github';
import { onTry } from './utils/on-try';

async function main() {
  const [success, error] = await onTry(async () => {
    const context = github.context;
    const token = core.getInput('token-pat');

    const time = new Date().toTimeString();
    core.setOutput('time', time);

    console.log(context.repo);
    console.log(
      await github.getOctokit(token).request('GET /users/{username}/repos', {
        username: context.repo.owner,
      })
    );
  });

  if (!error) {
    return;
  }

  return core.setFailed(error.message);
}

main();
