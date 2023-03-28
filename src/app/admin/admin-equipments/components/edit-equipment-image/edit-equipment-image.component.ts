import {Component, Input, OnInit} from '@angular/core';
import {Equipment} from "../../../../core/models/equipment";
import {EquipmentsService} from "../../../../core/services/equipments/equipments.service";

@Component({
  selector: 'app-edit-equipment-image',
  templateUrl: './edit-equipment-image.component.html',
  styleUrls: ['./edit-equipment-image.component.scss']
})
export class EditEquipmentImageComponent implements OnInit {

  imgUrl: string = "";
  defaultImgUrl: string = "";
  file: File | null = null;
  fileReader: FileReader;
  private loadedEquipment: Equipment | null = null;

  constructor(private service: EquipmentsService) {
    this.fileReader = new FileReader();
    this.setupFileReader();
  }

  @Input() set equipment(equipment: Equipment) {
    this.loadedEquipment = equipment;
    this.service.getDownloadUrl(equipment.id).then(url => {
      this.defaultImgUrl = url;
      this.imgUrl = url;
    });
  }

  fileChosen(file: File) {
    this.file = file;
    this.fileReader.readAsDataURL(file);
  }

  ngOnInit(): void {
  }

  cancel() {
    this.imgUrl = this.defaultImgUrl;
  }

  save() {
    if (this.loadedEquipment == null || this.file == null) return;
    this.service.uploadEquipmentImage(this.loadedEquipment, this.file).on("state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  /**
   * Sets up the fileReader so that it updates the imgUrl when a new file is chosen
   * @private
   */
  private setupFileReader() {
    this.fileReader.onload = (event) => {
      if (event == null || event.target == null) return;
      const result = event.target.result;
      if (result == null) return;
      this.imgUrl = result.toString();
    }
  }
}
