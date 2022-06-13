import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NuMonacoEditorModule } from '@ng-util/monaco-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // MonacoEditorModule.forRoot({
    //   // dynamicImport: () => import('monaco-editor'),
    //   baseUrl: 'lib/v1',
    //   defaultOptions: {},
    // }),
    NuMonacoEditorModule.forRoot({
      defaultOptions: { scrollBeyondLastLine: false },
      monacoLoad: (m) => {
        const uri = m.Uri.parse('a://b/foo.json');
        m.languages.json.jsonDefaults.setDiagnosticsOptions({
          validate: true,
          schemas: [
            {
              uri: 'http://myserver/foo-schema.json',
              fileMatch: [uri.toString()],
              schema: {
                type: 'object',
                properties: {
                  p1: {
                    enum: ['v1', 'v2'],
                  },
                  p2: {
                    $ref: 'http://myserver/bar-schema.json',
                  },
                },
              },
            },
            {
              uri: 'http://myserver/bar-schema.json',
              fileMatch: [uri.toString()],
              schema: {
                type: 'object',
                properties: {
                  q1: {
                    enum: ['x1', 'x2'],
                  },
                },
              },
            },
          ],
        });
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
