import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private toastr: ToastrService){
  }
  title = 'Store-pro';
  showSuccess() {
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }
}
