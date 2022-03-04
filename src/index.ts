import { Action } from "./action";
import { ActionLogger } from "./core/actions/action-logger";
import { Github } from "./core/github/github";

async function main() {
    const github = new Github();

    github.exec.run("pwd");

    try {
        await new Action(github).exec();
    } catch (err) {
        const error = err as Error;

        ActionLogger.failed(error.message);
    }
}

main();
