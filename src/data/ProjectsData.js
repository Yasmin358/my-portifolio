import lessonsLearned from '../images/LessonsLearned.png';
import pixelArt from '../images/PixelArt.png';
import pixelArt2 from '../images/PixelArt2.png';
import technologies from './TechnologiesData';
import toDoList from '../images/toDoList.png';
import toDoList2 from '../images/toDoList2.png';
import solarSystem from '../images/solar.png';
import solarSystem2 from '../images/system.png';
import TrybeTunes from '../images/TrybeTunes.png';
import TrybeTunes2 from '../images/TrybeTunes2.png';
import TrybeTunes3 from '../images/TrybeTunes3.png';
import TrybeTunes4 from '../images/TrybeTunes4.png';

const projects = [
  {
    id: 1,
    name: 'Lessons Learned',
    course: 'Trybe',
    module: 'Fundamentos',
    technologies: [technologies[0], technologies[1]],
    image: [{ id: 1, image: lessonsLearned }],
    about: '',
    resume: 'Um site contendo informações sobre o que aprendemos'
      + ' na Trybe ao longo dos primeiros blocos do modulo de fundamentos.',
    link: 'https://yasmin358.github.io/Trybe/LessonsLearned/',
    repository: 'Indisponivel',
    duration: '05/04/2022 a 12/04/2022',
    dateBegin: '05/04/2022',
    dateEnd: '11/04/2022',
    favorite: false,
    status: 'finalizado',
  },
  {
    id: 2,
    name: 'Pixel Art',
    course: 'Trybe',
    module: 'Fundamentos',
    technologies: [technologies[0], technologies[1], technologies[2]],
    image: [{ id: 1, image: pixelArt }, { id: 2, image: pixelArt2 }],
    about: '',
    resume: 'Um site para criar desenhos em Pixeal Art',
    link: 'https://yasmin358.github.io/Trybe/PixelsArt/',
    repository: 'Indisponivel',
    duration: '20/04/2022 - 04/05/2022',
    dateBegin: '20/04/2022',
    dateEnd: '25/04/2022',
    favorite: true,
    status: 'finalizado',
  },
  {
    id: 3,
    name: 'To Do List',
    course: 'Trybe',
    module: 'Fundamentos',
    technologies: [technologies[0], technologies[1], technologies[2]],
    image: [{ id: 1, image: toDoList2 }, { id: 2, image: toDoList }],
    about: '',
    resume: 'Um site para criar uma lista de afazeres',
    link: 'https://yasmin358.github.io/Trybe/ToDoList/',
    repository: 'Indisponivel',
    duration: 'Projeto Bônus, desenvolvido no meu tempo livre',
    dateBegin: '25/04/2022',
    dateEnd: '18/06/2022',
    favorite: true,
    status: 'finalizado',
  },
  {
    id: 4,
    name: 'Solar System',
    course: 'Trybe',
    module: 'Front-End',
    technologies: [technologies[0], technologies[1], technologies[2], technologies[3]],
    image: [{ id: 1, image: solarSystem }, { id: 2, image: solarSystem2 }],
    about: '',
    resume: 'Um site contendo dados sobre as viagens ao sistema solar',
    link: 'https://trybe-project-solar-system-chi.vercel.app/',
    repository: 'https://github.com/Yasmin358/trybe-project-solar-system',
    duration: '21/06/2022 a 28/06/2022',
    dateBegin: '21/06/2022',
    dateEnd: '27/06/2022',
    favorite: false,
    status: 'finalizado',
  },
  {
    id: 5,
    name: 'TrybeTunes',
    course: 'Trybe',
    module: 'Front-End',
    technologies: [technologies[0], technologies[1], technologies[2], technologies[3]],
    image: [{ id: 1, image: TrybeTunes }, { id: 2, image: TrybeTunes2 }, { id: 2, image: TrybeTunes3 }, { id: 2, image: TrybeTunes4 }],
    about: '',
    resume: 'Clone do Itunes - Site para ouvir musica',
    link: 'https://trybe-project-trybetunes-one.vercel.app/',
    repository: 'https://github.com/Yasmin358/trybe-project-trybetunes',
    duration: '01/07/2022 a 12/07/2022',
    dateBegin: '04/07/2022',
    dateEnd: '12/07/2022',
    favorite: true,
    status: 'finalizado',
  }
];

export default projects;
