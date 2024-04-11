import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/semantic-html/semantic-html.component').then(
        (c) => c.SemanticHtmlComponent
      ),
  },

  {
    path: 'typescript',
    loadComponent: () =>
      import('./pages/typescript/typescript.component').then(
        (c) => c.TypescriptComponent
      ),
  },
];
