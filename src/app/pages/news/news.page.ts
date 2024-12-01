import { Component, ViewChildren, ViewChild, ElementRef, OnInit, QueryList, } from '@angular/core';
import { AnimationController, IonCard, Animation, IonContent } from '@ionic/angular';
import { FortniteShopApiService } from 'src/app/services/fortnite-shop-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  @ViewChild(IonContent) content!: IonContent;

  @ViewChildren(IonCard, {read: ElementRef})
  cardElements!:QueryList<ElementRef<HTMLIonCardElement>>

  private animation!:Animation;
  newsItems: any[] = [];

  constructor(private fortniteShopApiService: FortniteShopApiService,private animationController: AnimationController) { }

  ngOnInit() {
    this.fortniteShopApiService.getNews().subscribe((data: any) =>{
      this.newsItems = data.data.br.motds;
      console.log(this.newsItems);
  })
  }
  ngAfterViewInit(){
    const firstNews = this.animationController
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
      .addAnimation([firstNews]);

      this.animation.play();

  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

}
