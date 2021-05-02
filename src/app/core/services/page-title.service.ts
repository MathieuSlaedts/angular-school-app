import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  
  onTitleChange: BehaviorSubject<string> = new BehaviorSubject("");

  constructor() { }

  setTitle(input: string): void {
    this.onTitleChange.next(input);
  }

  /* getTitle(): BehaviorSubject<string> {
    return this.onTitleChange
  } */
}
