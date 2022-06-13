import { Component } from '@angular/core';
import { NuMonacoEditorDiffModel, NuMonacoEditorEvent, NuMonacoEditorModel } from '@ng-util/monaco-editor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  disabled = true;
  themes = ['vs', 'vs-dark', 'hc-black'];
  options = { theme: 'vs' };
  
  model: NuMonacoEditorModel = {
    value: '<h1>Title</h1>',
    language: 'html',
  };
  
  oldModel: NuMonacoEditorDiffModel = {
    code: 'const a = 1;',
    language: 'typescript',
  };
  
  newModel: NuMonacoEditorDiffModel = {
    code: `
      const a = 2;
      console.log('test');
      const c = 3;
    `,
    language: 'typescript',
  };
  
  setTheme(theme: string): void {
    this.options = { theme };
  }
}
