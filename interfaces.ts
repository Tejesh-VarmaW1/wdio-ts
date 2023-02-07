export interface loginPage {
  performLogin(userName: string, pass: string): void;

  validateLogin(): void;

  validateInvalidLogin(): void;
}
