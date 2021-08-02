import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-clipboard',
  templateUrl: './copy-clipboard.component.html',
  styleUrls: ['./copy-clipboard.component.css']
})
export class CopyClipboardComponent implements OnInit {
  todaysDate: Date = new Date();
  textMessage:any;
  msgHideAndShow:boolean=false;
  constructor() {
    setInterval(() => {
      this.todaysDate = new Date();
    }, 1);
  }

  ngOnInit() {
    console.log(this.todaysDate);

  }
  // Text Message 
  textMessageFunc(msgText){
    this.textMessage=msgText+" Copied to Clipboard";
    this.msgHideAndShow=true;
    setTimeout(() => {
      this.textMessage="";
      this.msgHideAndShow=false;
    }, 1000);
   
  }
  /* To copy Text from Textbox */
  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    this.textMessageFunc('Text');  
    
  }

  copyTodaysDate(date) {
    date.select();
    document.execCommand('copy');
    date.setSelectionRange(0, 0);
    this.textMessageFunc('Date');
  }

  copyCurrentTime(time) {
    time.select();
    document.execCommand('copy');
    time.setSelectionRange(0, 0);
    this.textMessageFunc('Time');
  }
}
