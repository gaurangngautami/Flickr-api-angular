import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-flickr-search',
  templateUrl: './flickr-search.component.html',
  styleUrls: ['./flickr-search.component.css']
})
export class FlickrSearchComponent implements OnInit {

  constructor(private http:HttpClient) { }
  api_key='bdd5e4b5f5b0cc7300d85531ae41561e';
  searchTag:any;
  per_page:number;
  photos:any;
  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(){
    let perpage = this.per_page || 20;
    let query = this.searchTag || 'Water'; 
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.api_key}&tags=${query}&per_page=${perpage}&format=json&nojsoncallback=1`;
    this.http.get(url).subscribe(res => {
      this.photos = res;
    });
  }
}
