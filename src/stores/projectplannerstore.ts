import { defineStore } from 'pinia';
import { ref } from 'vue';
export default defineStore('projectplanner', () => {
  const projectData = ref();

  const getProjectData = () => {
    projectData.value = [
      {
        id: 1,
        title: 'Elit nulla incididunt aute aute consectetur1',
        details:
          'Nostrud Lorem incididunt nostrud tempor fugiat voluptate dolore do enim adipisicing magna. Ullamco velit eu consectetur incididunt ullamco quis laboris. Velit excepteur Lorem sit culpa laboris occaecat incididunt amet pariatur laborum amet Lorem ad. Veniam duis pariatur exercitation nostrud nulla ullamco laboris quis non. Commodo minim non sunt veniam voluptate ex amet. Ea tempor officia enim reprehenderit tempor proident eu culpa est ad ipsum. Quis cupidatat quis cupidatat veniam Lorem.',
        completed: false,
      },
      {
        id: 2,
        title: 'Elit nulla incididunt aute aute consectetur2',
        details:
          'Nostrud Lorem incididunt nostrud tempor fugiat voluptate dolore do enim adipisicing magna. Ullamco velit eu consectetur incididunt ullamco quis laboris. Velit excepteur Lorem sit culpa laboris occaecat incididunt amet pariatur laborum amet Lorem ad. Veniam duis pariatur exercitation nostrud nulla ullamco laboris quis non. Commodo minim non sunt veniam voluptate ex amet. Ea tempor officia enim reprehenderit tempor proident eu culpa est ad ipsum. Quis cupidatat quis cupidatat veniam Lorem.',
        completed: true,
      },
      {
        id: 3,
        title: 'Elit nulla incididunt aute aute consectetur3',
        details:
          'Nostrud Lorem incididunt nostrud tempor fugiat voluptate dolore do enim adipisicing magna. Ullamco velit eu consectetur incididunt ullamco quis laboris. Velit excepteur Lorem sit culpa laboris occaecat incididunt amet pariatur laborum amet Lorem ad. Veniam duis pariatur exercitation nostrud nulla ullamco laboris quis non. Commodo minim non sunt veniam voluptate ex amet. Ea tempor officia enim reprehenderit tempor proident eu culpa est ad ipsum. Quis cupidatat quis cupidatat veniam Lorem.',
        completed: true,
      },
    ];
  };

  const getCompletedProject = () => {
    return projectData.value.filter(
      (project: object) => project.completed == true
    );
  };

  const getOnGoingProject = () => {
    return projectData.value.filter(
      (project: object) => project.completed == false
    );
  };

  const updateProject = (projectObject: object, edit: boolean) => {
    // Implement Interface
    if (edit) {
      projectData.value.map((project: object) => {
        if (projectObject.id == project.id) {
          project.title = projectObject.title;
          project.details = projectObject.details;
          project.completed = projectObject.completed;
        }
      });
    } else {
      projectData.value.push(projectObject);
    }
  };

  const toggleCompleted = (projectObject: object) => {
    projectData.value.map((project: object) => {
      if (projectObject.id == project.id) {
        project.completed = !projectObject.completed;
      }
    });
  };

  const deleteProject = (projectObject: object) => {
    projectData.value = projectData.value.filter(
      (project: object) => project.id != projectObject.id
    );
  };

  return {
    getProjectData,
    projectData,
    getCompletedProject,
    getOnGoingProject,
    updateProject,
    toggleCompleted,
    deleteProject,
  };
});
