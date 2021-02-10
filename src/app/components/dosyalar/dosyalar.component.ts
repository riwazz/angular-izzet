import { StServisService } from './../../services/stServis.service';
import { Dosya } from './../../models/dosya';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dosyalar',
  templateUrl: './dosyalar.component.html',
  styleUrls: ['./dosyalar.component.scss']
})
export class DosyalarComponent implements OnInit {
  dosyalar: Dosya[];
  secDosya: Dosya = new Dosya();
  kategori:string;
  uid:string;
  files: FileList;
  constructor(
    public stServis: StServisService
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.DosyaListele();
  }
  
  DosyaSec(e) {
    this.files = e.target.files;
  }
  DosyaYukle() {
    var user = JSON.parse(localStorage.getItem("user"));
    var dosya = new Dosya();
    dosya.userid = user.uid;
    dosya.username = user.displayName;
    dosya.kategori = this.secDosya.kategori; 
    dosya.file = this.files[0];
    this.stServis.DosyaYukleStorage(dosya).subscribe(
      p => {
        console.log("Yüklendi");
      }, err => {
        console.log("Hata");
      }
    );
  }
  DosyaSil(dosya: Dosya) {
    this.stServis.DosyaSil(dosya);
  }



  Genel(){
    this.DosyaListele();
  }
  Doga(){
    this.kategori = "Doga"
    this.KategoriListele();
  }
  Araba(){
    this.kategori = "Araba"
    this.KategoriListele();
  }
  Spor(){
    this.kategori = "Spor"
    this.KategoriListele();
  }
  Hayvanlar(){
    this.kategori = "Hayvanlar"
    this.KategoriListele();
  }
  DosyaListele() {
    this.stServis.DosyaListele().snapshotChanges().subscribe(data => {
      this.dosyalar = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.dosyalar.push(y as Dosya);
      });
    });
  }
  KategoriListele() {
    this.stServis.DosyaByKategori(this.kategori).snapshotChanges().subscribe(data => {
      this.dosyalar = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.dosyalar.push(y as Dosya);
      });
    });
  }






}
