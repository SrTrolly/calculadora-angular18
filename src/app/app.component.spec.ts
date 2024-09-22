import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {


  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render router-outlet', () => {
    expect(compiled.querySelector('router-outlet')).not.toBeNull()
  });

  it('should render router-outlet wrapped iwth css classes', () => {
    const divElement = compiled.querySelector('div');
    const cssClasses = 'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5'.split(' ');


    expect(divElement?.classList).not.toBeNull();

    divElement?.classList.forEach(className => {
      expect(cssClasses).toContain(className);
    });
  });

  it('Buy me a beer contains in the title', () => {

    const divElement = compiled.querySelector('a');
    const title = 'Buy me a beer';

    expect(divElement?.title).toEqual(title);


  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, calculadora');
  // });
});
