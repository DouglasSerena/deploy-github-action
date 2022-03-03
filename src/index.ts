import * as core from '@actions/core';
import * as github from '@actions/github';
import { GithubRepository } from './repositories/github/github.repository';
import { GithubCreateTag } from './usecases/github/create-tag.usecasecopy';
import { GithubGetLastTag } from './usecases/github/get-last-tag.usecase';
import { onTry } from './utils/on-try';

async function main() {
  const [success, error] = await onTry(async () => {
    const context = github.context;
    const { owner, repo } = context.repo;
    const api = github.getOctokit(core.getInput('token-pat'));

    const githubRepository = new GithubRepository(api);
    const githubGetLastTag = new GithubGetLastTag(githubRepository);
    const githubCreateTag = new GithubCreateTag(githubRepository);

    const tag = await githubGetLastTag.tag(owner, repo);

    core.info(`Last tag: ${tag.name}`);
    if (tag.metadata) {
      console.log(
        await githubCreateTag.createAlpha(
          owner,
          repo,
          context.sha,
          tag.metadata
        )
      );
    } else {
      throw new Error(
        'Não a como gerar um tag devido a não haver metadados da versão.'
      );
    }
  });

  if (!error) {
    return;
  }

  core.debug(`Message: ${error.message}\n${error.stack}`);

  return core.setFailed(error.message);
}

main();
