import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "disclaimer",

  styleUrls: ["./disclaimer.component.scss"],
  template: `
    <section>
      <div style="height: 100px"></div>
      <mat-card class="container container-outline">
        <div>
          <mat-card class="inner-cards-team-bios">
            <mat-card-header>
              <mat-card-title>Disclaimer</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              Participants on this list are exclusively self-nominated. All
              entries are vetted by team members before being made available.
              Once vetted entries may be edited, updated or removed from the
              list by their owner.
            </mat-card-content>
            <mat-card-content>
              Though best efforts are made to ensure the accuracy and
              consistency of information on this list, Diversify CS makes no
              claims or guarantees about the list as a whole or any specific
              entry.
            </mat-card-content>
            <mat-card-content>
              Participants consent to having the information on this list
              publicly displayed and available. Diversify CS cannot guarantee
              that copies or reproductions will not be made at any given time,
              and takes no responsibility for the accuracy, representation or
              removal of these materials.
            </mat-card-content>
          </mat-card>
        </div>
      </mat-card>
    </section>
  `
})
export class TestimonialsCarouselComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
