import brookshop_1 from './assets/brookshop_1.PNG'
import brookshop_2 from './assets/brookshop_2.PNG'
import brookshop_3 from './assets/brookshop_3.PNG'
import brookshop_4 from './assets/brookshop_4.PNG'
import portfolio_1 from './assets/portfolio_1.PNG'
import portfolio_2 from './assets/portfolio_2.PNG'
import portfolio_3 from './assets/portfolio_3.PNG'
import ferretify_1 from './assets/ferretify_1.PNG'
import ferretify_2 from './assets/ferretify_2.PNG'
import ferretify_3 from './assets/ferretify_3.PNG'
import ferretify_4 from './assets/ferretify_4.PNG'
import TMWB_1 from './assets/TMWB_1.PNG'
import TMWB_2 from './assets/TMWB_2.PNG'
import TMWB_3 from './assets/TMWB_3.PNG'
import TMWB_4 from './assets/TMWB_4.PNG'



export const proyectsData = [
    {
        title: "Mi portfolio",
        subtitle: "Mi primer portfolio como profesional Frontend Developer",
        images: [portfolio_1, portfolio_2, portfolio_3],
        info: "Mi primer portfolio como Frontend Developer profesional donde utilice las tecnologias de siempre pero tambien tuve la oportunidad de utilizar y aprender nuevos conceptos como lo es CSS Modules. La pagina ya esta en internet y se puede ver desde todos los dispositivos",
        technologies: ["HTML", "CSS", "Javascript", "Sass", "CSS Modules", "ReactJS"],
        gitLink: "https://github.com/facuferreria/Mi-Portfolio",
        website: "https://facundoferreria.vercel.app/"
    }, 
    {
        title: "Ferretify",
        subtitle: "Mi propio reproductor de musica",
        images: [ferretify_2, ferretify_3, ferretify_4, ferretify_1],
        info: "La pagina es un clon del reproductor de musica conocida como Spotify a la que me gusta llamarle Ferretify. En este reproductor usted, accediendo a su cuenta de spotify, podra escuchar y ver de todo acerca de sus canciones, sus top artistas, sus playlists y mucho mas.",
        technologies: ["HTML", "CSS", "Javascript", "Sass", "ReactJS", "Spotify API"],
        gitLink: "https://github.com/facuferreria/my-spotify-clone-app",
        website: "#"
    }, 
    {
        title: "Brookshop",
        subtitle: "El proyecto final del curso de ReactJS por parte de Coderhouse, una increible e-commerce de zapatillas.",
        images: [brookshop_1, brookshop_2, brookshop_3, brookshop_4],
        info: "Es una pagina ecommerce de zapatillas llamada Brook Shop que fue hecha con los contenidos vistos en el curso de ReactJS de Coderhouse. El diseño de la misma fue inspirado en base a las empresas de solodeportes y bourbonstore. La pagina ya esta en internet y se puede ver desde todos los dispositivos",
        technologies: ["HTML", "CSS", "Javascript", "Sass", "ReactJS", "Firebase"],
        gitLink: "https://github.com/facuferreria/My-Ecomerce-with-ReactJS",
        website: "https://brookshop.netlify.app/"
    },
    {
        title: "TheMoviesWebsite",
        subtitle: "Un sitio donde podras ver de todo sobre el mundo del cine y la television",
        images: [TMWB_1, TMWB_2, TMWB_3, TMWB_4],
        info: "Es un proyecto sobre una pagina web hecho con la TMDB API donde puedes encontrar informacion sobre cualquier pelicula o serie. Este sitio esta hecho con HTML, SASS y con VanillaJS. Cabe destacar que este sitio es responsive y se puede ver en todos los dispositivos.",
        technologies: ["HTML", "CSS", "Javascript", "Sass", "TDMB API"],
        gitLink: "https://github.com/facuferreria/TheMoviesWebsite",
        website: "#"
    },  
    
]