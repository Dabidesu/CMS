import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { President } from './president';
import { Senator } from './senator';
import { PresidentService } from './president.service';
import { SenatorService } from './senator.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public presidents: President[];
  public editPresident: President;
  public deletePresident: President;

  public senators: Senator[];
  public editSenator: Senator;
  public deleteSenator: Senator;

  title: any;

  

  constructor(private presidentService: PresidentService, private senatorService: SenatorService){
    this.presidents = [];
    this.senators = [];
  }


  ngOnInit() {
    this.getPresidents();
    this.getSenators();
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

  public getSenators(): void{
    this.senatorService.getSenators().subscribe(
      (response:Senator[]) => {
        this.senators = response;
        console.log(this.senators);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  //------------------------ President ------------------------//
  public onAddPresident(addFormasd: NgForm): void {
    document.getElementById('add-president-form')?.click();
    this.presidentService.addPresident(addFormasd.value).subscribe(
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



  //------------------------ Senator ------------------------//
  public onAddSenator(addFormzxc: NgForm): void {
    document.getElementById('add-senator-form')?.click();
    this.senatorService.addSenator(addFormzxc.value).subscribe(
      (response: Senator) => {
        console.log(response);
        this.getSenators();
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateSenator(senator: Senator): void {
    this.senatorService.updateSenator(senator).subscribe(
      (response: Senator) => {
        console.log(response);
        this.getSenators();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onDeleteSenator(senatorId: number): void {
    this.senatorService.deleteSenator(senatorId).subscribe(
      (response: void) => {
        console.log(response);
        this.getSenators();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchSenators(key: string): void {
    console.log(key);
    const results: Senator[] = [];
    for (const senator of this.senators) {
      if (senator.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || senator.partyList.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || senator.lawsPassed.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || senator.knownFor.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || senator.background.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(senator);
      }
    }
    this.senators = results;
    if (results.length === 0 || !key) {
      this.getSenators();
    }
  }

  public onOpenModalXD(senator: Senator, mode: string): void {
    const containerxd = document.getElementById('main-container');
    const buttonxd = document.createElement('button');
    buttonxd.type = 'button';
    buttonxd.style.display = 'none';
    buttonxd.setAttribute('data-toggle', 'modal');
    if (mode == 'addSen')
    {
      buttonxd.setAttribute('data-target', '#addSenatorModal');
    }
    if (mode == 'editSen')
    {
      this.editSenator = senator;
      buttonxd.setAttribute('data-target', '#updateSenatorModal');
    }
    if (mode == 'deleteSen')
    {
      this.deleteSenator = senator;
      buttonxd.setAttribute('data-target', '#deleteSenatorModal');
    }
    if (mode == 'view')
    {
      buttonxd.setAttribute('data-target', '#viewSenatorModal');
    }
    containerxd?.appendChild(buttonxd);
    buttonxd.click();
  }
  
  
  



  
}
