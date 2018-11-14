import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;

  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log('Constructor Called!');
  }

  ngOnInit() {
    console.log('ngOnInit Called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log(
      'Paragraph Content: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck Called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit Called!');
    console.log(
      'Paragraph Content: ' + this.paragraph.nativeElement.textContent
    );
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit Called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }
  ngOnDestroy() {
    console.log('ngOnDestroy Called!');
  }
}
