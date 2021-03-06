import React from 'react';
import 'containers/MainPage/TasksList/index.css';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {ActionCreator, Operation} from "actions/tasks";
import Pagination from "components/Pagination";
import TabFilter from "components/TabFilter";
import {filterDirections, filterTypes} from "constants/index.js";
import TabFilterItem from "components/TabFilter/TabFilterItem";
import TaskCard from "containers/MainPage/TaskCard";

const TasksList = () => {
  const tasks = useSelector(state => state.allTasks.data)
  const {totalTaskCount} = useSelector(state => state.allTasks)
  const {activePage} = useSelector(state => state.allTasks)
  const {sortField} = useSelector(state => state.allTasks.filter)
  const {sortDirection} = useSelector(state => state.allTasks.filter)
  const dispatch = useDispatch();

  const paginationHandler = (value) => {
    dispatch(ActionCreator.setActivePage(value))
  }

  useEffect(() => {
    dispatch(Operation.fetchTasks())
  }, [dispatch, activePage, sortField, sortDirection])

  return (
      <div className='tasks'>
        <div className='tasks__header-wrapper'>
          <TabFilter>
            {Object.values(filterTypes).map((item) => (
                <TabFilterItem
                    key={item}
                    title={item}
                    filterHandle={()=>dispatch(ActionCreator.setFilter(item))}
                    isActive={sortField === item}
                />))}
          </TabFilter>
          <TabFilter>
            <TabFilterItem
                title={filterDirections.ASC}
                filterHandle={()=>dispatch(ActionCreator.setDirection(filterDirections.ASC))}
                isActive={sortDirection === filterDirections.ASC}
            />
            <TabFilterItem
                title={filterDirections.DESC}
                filterHandle={()=>dispatch(ActionCreator.setDirection(filterDirections.DESC))}
                isActive={sortDirection === filterDirections.DESC}
            />
          </TabFilter>
        </div>
        <div className='tasks__cards-wrapper'>
          {tasks.map((task) => (<TaskCard task={task} key={task.id} />))}
        </div>
        <Pagination totalTaskCount={totalTaskCount} activePage={activePage} onChange={paginationHandler}/>
      </div>
  );
}

export default TasksList
