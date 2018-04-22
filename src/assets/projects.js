import uuidv4 from 'uuid/v4';
import unicorn from './images/unicornCare.jpeg';
import times from 'lodash/times';

const fakeProjects = (amount) => {
  return times(amount, () => ({
    id: uuidv4(),
    title: 'Unicorn Care',
    description: 'Addictive play for my children',
    technologies: [
      {
        id: uuidv4(),
        value: 'React',
      },
      {
        id: uuidv4(),
        value: 'Node',
      },
      {
        id: uuidv4(),
        value: 'Redux',
      },
    ],
    image: unicorn,
    keyPoints: [
      {
        id: uuidv4(),
        value: 'Collaborated with tiny designers',
      },
      {
        id: uuidv4(),
        value: 'Tested iteratively',
      },
      {
        id: uuidv4(),
        value: 'Designed modular play',
      },
      {
        id: uuidv4(),
        value: 'Maximized childhood creativity',
      },
    ],
  }));
}

const projects = fakeProjects(5);

export default projects;
