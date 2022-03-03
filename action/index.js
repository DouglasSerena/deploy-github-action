"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const github_1 = __importDefault(require("@actions/github"));
const on_try_1 = require("./utils/on-try");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const [success, error] = yield (0, on_try_1.onTry)(() => {
            console.log(core_1.default.getInput('firebase-id'));
            const time = new Date().toTimeString();
            core_1.default.setOutput('time', time);
            const payload = JSON.stringify(github_1.default.context.payload, undefined, 2);
            console.log(`The event payload: ${payload}`);
        });
        if (success || !error) {
            return;
        }
        core_1.default.setFailed(error.message);
    });
}
main();
