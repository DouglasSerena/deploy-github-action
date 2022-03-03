import * as core from '@actions/core';
import * as github from '@actions/github';
import { GithubRepository } from './repositories/github/github.repository';
import { GithubGetLastTag } from './usecases/github/get-last-tag.usecase';
import { onTry } from './utils/on-try';

async function main() {
  const [success, error] = await onTry(async () => {
    const context = github.context;
    const api = github.getOctokit(core.getInput('token-pat'));

    const githubRepository = new GithubRepository(api);
    const githubGetLastTag = new GithubGetLastTag(githubRepository);

    console.log(githubGetLastTag.tag(context.repo.owner, context.repo.repo));
  });

  if (!error) {
    return;
  }

  return core.setFailed(error.message);
}

main();
