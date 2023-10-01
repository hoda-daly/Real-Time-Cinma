import { Time } from '@angular/common';
import { MovieService } from 'src/app/Service/movie.service';
import { movie } from 'src/app/Model/movie';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DataSeader {
  movies:movie[]= [
    {
      id: 'How-to-Train-Your-Dragon--The-Hidden-World',
      title: 'How to Train Your Dragon: The Hidden World',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_SX300.jpg',
      backdrop: 'https://m.media-amazon.com/images/M/MV5BMzI3MTc2NDY4MV5BMl5BanBnXkFtZTgwNDU3NTI2NjM@._V1_SX1777_CR0,0,1777,736_AL_.jpg',
      description: 'The adventures of Hiccup and Toothless continue in the third part of the beloved How to Train Your Dragon series. But when Toothless meets a new love interest and there’s a threat in the village, their friendship is tested like never before. A DreamWorks animation featuring Jay Baruchel, Cate Blanchett, Kristen Wiig and T.J. Miller.',
      director: 'Dean DeBlois',
      cast: [
        'Jay Baruchel',
        'Cate Blanchett',
        'Kristen Wiig',
        'Gerard Butler',
        'Jonah Hill'
      ],
      runtime: 104,
    },
    {
      id: 'Alita--Battle-Angel',
      title: 'Alita: Battle Angel',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BNzVhMjcxYjYtOTVhOS00MzQ1LWFiNTAtZmY2ZmJjNjIxMjllXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_SX300.jpg',
      backdrop: 'https://m.media-amazon.com/images/M/MV5BMjA3NjEwMDY3N15BMl5BanBnXkFtZTgwNTQ1MTQzNDM@._V1_SX1777_CR0,0,1777,960_AL_.jpg',
      description:
        'An action-packed story of one young woman\'s journey to discover the truth of who she is and her fight to change the world.',
      director: 'Robert Rodriguez',
      cast: ['Eiza González', 'Jennifer Connelly', 'Jackie Earle Haley'],
      runtime: 132,
    },
    {
      id: 'Glass',
      title: 'Glass',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTY1OTA2MjI5OV5BMl5BanBnXkFtZTgwNzkxMjU4NjM@._V1_SX300.jpg',
      backdrop: 'https://m.media-amazon.com/images/M/MV5BY2IwMWE4YjctNTVlMy00MDUwLTkxOGYtMmJlNDEwYmViN2YxXkEyXkFqcGdeQXVyMzQ5ODY3NjA@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      description:
        'Starring an incredible trio of Bruce Willis, Samuel L. Jackson, and James McAvoy, Glass is the latest film from director M. Night Shyamalan and follows the stories of David Dunn and Kevin Crumb, who come up against each other as Dunn pursues The Beast, determined to put an end to the superhuman nightmare. When the mysterious Elijah Price, aka Mr. Glass, reappears in Dunn’s life, the three men are forced to accept they’re part of something much larger – and it’s Mr. Glass who holds the secrets that could change everything. Anya Taylor-Joy returns as Casey Cooke, and Sarah Paulson stars as psychologist Dr. Ellie Staple, who is drawn into the men’s parallel reality.',
      director: 'M. Night Shyamalan',
      cast: [
        'Samuel L. Jackson',
        'Anya Taylor-Joy',
        'Bruce Willis',
        'Gerard Butler',
        'James McAvoy'
      ],
      runtime: 129,
    },
    {
      id: 'Aquaman',
      title: 'Aquaman',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX300.jpg',
      backdrop: 'https://m.media-amazon.com/images/M/MV5BMTg1MjMyOTQ2MV5BMl5BanBnXkFtZTgwNDA5NDcxNzM@._V1_.jpg',
      description:
        'The reluctant King of Atlantis is torn between his two homes as surface dwellers and the citizens of Atlantis collide. Following on from the events of Justice League, Aquaman stars Jason Momoa as the half-Atlantean, alongside Amber Heard, Patrick Wilson, Willem Dafoe and Nicole Kidman.',
      director: 'James Wan',
      cast: [
        'Jason Momoa',
        'Amber Heard',
        'Nicole Kidman',
        'Patrick Wilson',
        'Willem Dafoe'
      ],
      runtime: 143,
    },
    {
      id: 'Mary-Poppins-Returns',
      title: 'Mary Poppins Returns',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTk0NDIzMTA1MF5BMl5BanBnXkFtZTgwMzM0MTUzNjM@._V1_SX300.jpg',
      backdrop: 'https://m.media-amazon.com/images/M/MV5BMTA4MTEyMDQ4MzdeQTJeQWpwZ15BbWU4MDIxNzA0MDcz._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      description:
        'It’s 1930s London and everyone’s favourite nanny has returned – Mary Poppins (Emily Blunt) is ready to spread joy and magic in the much-anticipated sequel to the 1964 classic. This time, she finds that the Banks children have grown up and found themselves in need of a friendly face – as well as a little bit of magic. A Disney musical and sequel starring Emily Blunt, Lin-Manuel Miranda, and Ben Wishaw, along with Dick Van Dyke, Emily Mortimer, Colin Firth, and Meryl Streep.',
      director: 'Rob Marshall',
      cast: [
        'Emily Blunt',
        'Meryl Streep',
        'Dick Van Dyke',
        'Ben Whishaw',
        'Emily Mortimer'
      ],
      runtime: 130,
    },
    {
      id: 'Green-Book',
      title: 'Green Book',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMjMyNzExNzQ5OV5BMl5BanBnXkFtZTgwNjM2MjIxNjM@._V1_SX300.jpg',
      backdrop: 'https://m.media-amazon.com/images/M/MV5BMmE2OGVkNjktZGFhMS00YTZkLTg5Y2ItYmExZDgyMzA4YmU1XkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_.jpg',
      description:
        'Two unlikely travelling companions must navigate the terrifying racism of the deep south in 1962, in this road-trip comedy-drama based on a true story. Directed by Peter Farrelly, Green Book stars Academy Award winner Mahershala Ali and two-time nominee Viggo Mortensen, alongside Linda Cardellini.',
      director: 'Peter Farrelly',
      cast: ['Mahershala Ali', 'Viggo Mortensen', 'Linda Cardellini'],
      runtime: 130,
    },
    {
      id: 'Ralph-Breaks-the-Internet',
      title: 'Ralph Breaks the Internet',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTYyNzEyNDAzOV5BMl5BanBnXkFtZTgwNTk3NDczNjM@._V1_SX300.jpg',
      backdrop: 'https://m.media-amazon.com/images/M/MV5BMTgxNTM2Njk3M15BMl5BanBnXkFtZTgwOTQyMjI5NDM@._V1_SX1777_CR0,0,1777,744_AL_.jpg',

      description: 'Just because he’s a Bad Guy, doesn’t mean he’s a bad guy. Ralph is back, and it’s on his wide shoulders to save Sugar Rush from extinction.',
      director: 'Phil Johnston, Rich Moore',
      cast: ['Alan Tudyk', 'John C. Reilly', 'Sarah Silverman'],
      runtime: 112,
    },
    {
      id: 'Escape-Room',
      title: 'Escape Room',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMjQ2NDMwMTY3MF5BMl5BanBnXkFtZTgwNDg5OTc1NjM@._V1_SX300.jpg',
      backdrop: 'https://m.media-amazon.com/images/M/MV5BMTk3OTI0NDQ4OF5BMl5BanBnXkFtZTgwNTYwMDg1NjM@._V1_.jpg',
      description:
        'Six strangers, all from wildly different walks of life, are invited to try out a brand-new escape room challenge and the chance to win a million dollars. But the hidden organisers have more planned than a puzzle… Escape Room is the latest horror from Insidious: Hidden Key director Adam Robitel, and stars Deborah Ann Woll, Taylor Russell, and Logan Miller.',
      director: 'Adam Robitel',
      cast: ['Deborah Ann Woll', 'Taylor Russel'],
      runtime: 99,
    }
  ]

  constructor(private movieservice:MovieService){}

  seadData(){
    this.movies.forEach(movie => {
      this.movieservice.addMovie(movie,movie.title.replace(/\W/g, '-'));
    });
  }
}
