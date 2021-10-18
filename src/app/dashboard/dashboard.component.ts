import { Component, OnInit } from "@angular/core";
import { AuthService } from "../service/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.authService.getData().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        alert(error);
      }
    );
  }
}
