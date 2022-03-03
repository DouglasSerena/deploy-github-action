import * as core from '@actions/core';
import * as github from '@actions/github';
import { onTry } from './utils/on-try';

async function main() {
  console.log(core, github);
  const [success, error] = await onTry(async () => {
    const context = github.context;
    const token = core.getInput('token-pat');

    const time = new Date().toTimeString();
    core.setOutput('time', time);

    console.log(
      await github
        .getOctokit(token)
        .request('GET /repos/{owner}/{repo}/git/tags', {
          owner: context.repo.owner,
          repo: context.repo.repo,
        })
    );
  });

  if (!error) {
    return;
  }

  core.setFailed(error.message);
}

main();
