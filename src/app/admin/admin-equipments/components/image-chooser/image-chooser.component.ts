import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgxFileDropEntry} from "ngx-file-drop";

@Component({
  selector: 'app-image-chooser',
  templateUrl: './image-chooser.component.html',
  styleUrls: ['./image-chooser.component.scss']
})
export class ImageChooserComponent implements OnInit {

  @Output() fileChosen: EventEmitter<File> = new EventEmitter<File>();
  public files: NgxFileDropEntry[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          this.fileChosen.emit(file);

          /**
           // You could upload it like this:
           const formData = new FormData()
           formData.append('logo', file, relativePath)

           // Headers
           const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

           this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
           .subscribe(data => {
            // Sanitized logo returned from backend
          })
           **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }
}
