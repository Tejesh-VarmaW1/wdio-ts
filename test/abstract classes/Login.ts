import "reflect-metadata";
import { injectable } from "inversify";
import { loginSymbol } from "../../containers/login/login.symbol";

@injectable()
export abstract class Login {
  abstract performLogin(username: string, pass: string): void;
  abstract validateLogin(): void;
  abstract validateInvalidLogin(): void;
}
