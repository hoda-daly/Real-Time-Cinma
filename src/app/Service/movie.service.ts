import { Title } from '@angular/platform-browser';
import { movie } from '../Model/movie';
import { BehaviorSubject, Observable, of, Subject, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieCollection:AngularFirestoreCollection<movie>;
  constructor(private store: AngularFirestore) {
    this.movieCollection = store.collection<movie>("MovieList");
  }

  getAllMovies():Observable<movie[]>{
    return this.movieCollection.valueChanges();
  }
  getMovieById(id:string):Observable<movie|undefined>{
    return this.movieCollection.doc(id).valueChanges();
  }

  addMovie(movie:movie,Id:string|null = null):Observable<movie>{
    const movie$  = new Subject<movie>();
    const id= Id ?? this.store.createId();
    movie.id = id;
    this.movieCollection.doc(id).set(movie).then(_=>movie$.next(movie));
    return movie$;
  }

  deleteMovie(id:string){
    this.movieCollection.doc(id).delete();
  }

  updateMovie(id:string,movie:movie){
    this.movieCollection.doc(id).update(movie).then(val=>alert(`movie '${movie.title}' updated`));
  }

  /**
   * delete all the data in the database
   */
  dropAll(){
    this.getAllMovies().pipe(take(1)).subscribe(movies=>{
      movies.forEach(movie=>this.deleteMovie(movie.id));
    });
  }

}
