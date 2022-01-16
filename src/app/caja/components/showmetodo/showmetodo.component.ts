import { Component, OnInit } from '@angular/core';
import { CajaService } from '../../services/caja.service';

@Component({
  selector: 'app-showmetodo',
  templateUrl: './showmetodo.component.html',
  styleUrls: ['./showmetodo.component.css']
})
export class ShowmetodoComponent implements OnInit {
  isDisabled = false;
  switchValue = false;
  switchValue2 = false;
  loading = false;
  isVisible = false;

  isLoadingTwo = false;
  inputValue: string | null = null;
  textValue: string | null = null;

  constructor(public service: CajaService) { }

  ngOnInit(): void {
  }

  showModal(){
    this.isVisible = true;
  }

  clickSwitch2(id?: number): void {
    if (!this.loading && this.isDisabled == false) {
      this.loading = true;
      setTimeout(() => {
        this.switchValue2 = !this.switchValue2;
        // if(this.switchValue2){
        //   this.idMetodo = id;
        //   console.log(this.idMetodo)
        // }
        this.isDisabled = true;
        this.loading = false;
      }, 1000);
    }
  }

  setFactura(){
    // this.storeEffects.setFacturar(this.total,this.tickets,this.switchValue,this.idMetodo);
    // this.isVisible = false;
    // this.isVisible2 = false;
    // this.tickets = [];
    // this.menuServices.DeletTickets = this.tickets;
  }

  handleCancel(): void {
    this.isVisible = false;
    // this.isDisabled = false;
    // this.switchValue2 = !this.switchValue2;
    // this.idMetodo = 1
  }

}
