import { Component, ViewChildren, ViewChild, ElementRef, OnInit, QueryList, } from '@angular/core';
import { AnimationController, IonCard, Animation, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonContent) content!: IonContent;

  @ViewChildren(IonCard, {read: ElementRef})
  cardElements!:QueryList<ElementRef<HTMLIonCardElement>>

  @ViewChild('animarH1',{read: ElementRef, static: true})
  animarH1!:ElementRef;

  private animation!:Animation;
  constructor(private animationController: AnimationController) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    const cardD = this.animationController
      .create()
      .addElement(this.cardElements.get(0)!.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'green', 'var(--background)'); 

      this.animation = this.animationController
      .create()
      .duration(4000)
      .iterations(Infinity)
      .addAnimation([cardD]);

      this.animation.play();

  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}