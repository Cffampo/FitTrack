import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

  return (
    <div className="workout-details">
      <div className="workout-details-header">
        <h4>{workout.title}</h4>
        <span onClick={handleClick} className="workout-delete">
          <i className="ti ti-trash"></i>
        </span>
      </div>
      <div className="workout-stats">
        <div className="workout-stat">
          <p className="stat-label">Load</p>
          <p className="stat-value">{workout.load}<span className="stat-unit">kg</span></p>
        </div>
        <div className="workout-stat">
          <p className="stat-label">Reps</p>
          <p className="stat-value">{workout.reps}</p>
        </div>
      </div>
      <p className="workout-date">{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
    </div>
  );
}

export default WorkoutDetails;