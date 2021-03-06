import React, {useState} from 'react';
import './index.css';
import NewTask from "containers/MainPage/NewTask";
import TasksList from "containers/MainPage/TasksList";

const MainPage = () => {

  let [isOpenNewTask, setIsOpenNewTask] = useState(false)

  const isOpenHandler = () => setIsOpenNewTask(!isOpenNewTask)

  return (
      <div className='main-page__wrapper'>
        <TasksList handler={isOpenHandler}/>
        <div className='main-page__right-wrapper'>
          <button type='button' className="btn btn-success" onClick={isOpenHandler}>Create new task</button>
          {isOpenNewTask && <NewTask/>}
        </div>
      </div>
  );
}

export default MainPage;
