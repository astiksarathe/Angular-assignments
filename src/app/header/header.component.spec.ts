import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let element:HTMLElement;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the correct title', () => {
    // * arrange
    const title = 'Hey there';
    // * act
    component.title = title;
    fixture.detectChanges(); 
    // * assert
    expect(title).toEqual("Hey there");
  })



    it('should bind input text value to Component property', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('.name');
    const ageInput: HTMLInputElement = hostElement.querySelector('.age');

    
    nameInput.value = 'Swapnil';
    ageInput.value = '20';
    fixture.detectChanges();

    nameInput.dispatchEvent(new Event('input'));
    ageInput.dispatchEvent(new Event('input'));

    expect(component.personName).toBe('Swapnil');
    expect(component.personAge.toString()).toBe('20');
  });
});
