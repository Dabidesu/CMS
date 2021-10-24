import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { President } from './president';
import { PresidentService } from './president.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public presidents: President[];
  public editPresident: President;
  public deletePresident: President;
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

  public onAddPresident(addForm: NgForm): void {
    document.getElementById('add-president-form')?.click();
    this.presidentService.addPresident(addForm.value).subscribe(
      (response: President) => {
        console.log(response);
        this.getPresidents();
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdatePresident(president: President): void {
    this.presidentService.updatePresident(president).subscribe(
      (response: President) => {
        console.log(response);
        this.getPresidents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 

  
  
  public onDeletePresident(presidentId: number): void {
    this.presidentService.deletePresident(presidentId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPresidents();
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
    if (mode == 'add')
    {
      button.setAttribute('data-target', '#addPresidentModal');
    }
    if (mode == 'edit')
    {
      this.editPresident = president;
      button.setAttribute('data-target', '#updatePresidentModal');
    }
    if (mode == 'delete')
    {
      this.deletePresident = president;
      button.setAttribute('data-target', '#deletePresidentModal');
    }
    container?.appendChild(button);
    button.click();
  }
  
   
  public searchPresidents(key: string): void {
    console.log(key);
    const results: President[] = [];
    for (const president of this.presidents) {
      if (president.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || president.partyList.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || president.lawsPassed.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || president.knownFor.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || president.education.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(president);
      }
    }
    this.presidents = results;
    if (results.length === 0 || !key) {
      this.getPresidents();
    }
  }



  
}
