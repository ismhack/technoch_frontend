import { enableProdMode, CSP_NONCE } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),
     {provide: CSP_NONCE,
    useValue: (globalThis as any).nonceValue}
  ],
}).catch(err => console.error(err));
