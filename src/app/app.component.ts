import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { President } from './president';
import { PresidentService } from './president.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public presidents!: President[];
  title: any;


  constructor(private presidentService: PresidentService){
    this.presidents = [];
  }

  ngOnInit() {
    this.getPresidents();
  }

  public getPresidents(): void{
    this.presidentService.getPresidents().subscribe(
      (response:President[]) => {
        this.presidents = response;
        console.log(this.presidents);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(president: President, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode == 'edit')
    {
      button.setAttribute('data-target', '#updatePresidentModal');
    }
    if (mode == 'delete')
    {
      button.setAttribute('data-target', '#deletePresidentModal');
    }
    container?.appendChild(button);
    button.click();
  }
   




  
}
