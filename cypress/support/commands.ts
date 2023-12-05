import * as commonComands from './commands/common';
import * as profileComands from './commands/profile';
import * as articleComands from './commands/article';

Cypress.Commands.addAll(commonComands);
Cypress.Commands.addAll(profileComands);
Cypress.Commands.addAll(articleComands);

export {};
