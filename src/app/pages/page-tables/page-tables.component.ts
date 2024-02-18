import { Component } from '@angular/core';
import { PageContainerComponent } from "../../components/page-conteiner/page-conteiner.component";
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-page-tables',
  standalone: true,
  templateUrl: './page-tables.component.html',
  styleUrl: './page-tables.component.scss',
  imports: [PageContainerComponent, TableComponent]
})
export class PageTablesComponent {

}
