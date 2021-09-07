import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { PlayCard } from '../model/playCard.model';
import { PlayingCardServiceService } from '../playing-card-service.service';

@Component({
  selector: 'app-playing-card-table',
  templateUrl: './playing-card-table.component.html',
  styleUrls: ['./playing-card-table.component.css']
})
export class PlayingCardTableComponent implements OnInit {

  deck: PlayCard[];
  displayCard: PlayCard[];
  pointerOfDeck:number=0;
  countOfShownCard=4;
  pickNextCardsIsDisabled: boolean=false;
  appendCounterToPickBtn: string=""

  constructor(private playingCardServiceService: PlayingCardServiceService ) { 
    this.displayCard=[];
    
    this.deck=this.playingCardServiceService.getDeck_32();
    this.generate();
    // debugger;
  }

  generate(): void {
    this.randomDeck()
    this.pointerOfDeck=0;
    this.displayCard=[];
    this.pickNextCardsIsDisabled=false;
    this.appendCounterToPickBtn="("+this.pointerOfDeck + " of " + this.deck.length +")";
  }



  randomDeck(): void {

    for (let i=0;i<this.deck.length;i++) {

      let randomInt=this.playingCardServiceService.getRandomInt(this.deck.length-1);
      let currentPlayCard=this.deck[i];
      this.deck[i]=this.deck[randomInt];
      this.deck[randomInt]=currentPlayCard;

    }



  }


  pickNextCards(): void {
     // debugger;
     
     for(let i=0;i<this.countOfShownCard;i++) {
      
      this.displayCard[i]=this.deck[this.pointerOfDeck++];

     }

     if (this.pointerOfDeck>=this.deck.length) {
      this.pickNextCardsIsDisabled=true;
     }
     this.appendCounterToPickBtn="("+this.pointerOfDeck + " of " + this.deck.length +")";

  }


  ngOnInit(): void {
  
  
  }




}
