import { FilterType } from '../types/FilterType';
import { Todo } from '../types/Todo';
import cn from 'classnames';

type Props = {
  filter: FilterType;
  notCompletedTodosCount: number;
  handleFilterChange: (newFilter: FilterType) => void;
  filteredTodos: Todo[];
  handleClearCompleted: () => Promise<void>;
};

export const Footer: React.FC<Props> = props => {
  const {
    notCompletedTodosCount,
    filter,
    handleFilterChange,
    filteredTodos,
    handleClearCompleted,
  } = props;

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {notCompletedTodosCount} items left
      </span>

      <nav className="filter" data-cy="Filter">
        {Object.values(FilterType).map(filterOption => (
          <a
            key={filterOption}
            href={`#/${filterOption === FilterType.All ? '' : filterOption.toLowerCase()}`}
            className={cn('filter__link', {
              selected: filter === filterOption,
            })}
            data-cy={`FilterLink${filterOption}`}
            onClick={() => handleFilterChange(filterOption)}
          >
            {filterOption}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={notCompletedTodosCount === filteredTodos.length}
        onClick={handleClearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
