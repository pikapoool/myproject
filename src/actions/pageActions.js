import AppConstants from '../constants/AppConstants';
import * as api from '../api/api.js';

export function signIn(email, pass) {
	if (email) {
		if(pass){
			return {
				type: AppConstants.SIGN_IN,
				email,
				pass
			}
		}else{
			return {
				type: AppConstants.SIGN_IN_FAILED,
				showEmailError: false,
				showPassError: true
			}
		}
	}else{
		return {
			type: AppConstants.SIGN_IN_FAILED,
			showEmailError: true,
			showPassError: true
		}
	};
}

export function signOut() {
	return {
		type: AppConstants.SIGN_OUT
	}
}

export function toggleTask(taskIndex, subtaskIndex, done, projects, creator, sorting) {
	return {
		type: AppConstants.TOGGLE_TASK,
		taskIndex,
		subtaskIndex,
		done,
		projects,
		creator,
		sorting
	}
}

export function	onCreatorChange(creator, projects) {
	return {
		type: AppConstants.SET_CREATOR,
		creator,
		projects,
	}
}

export function	onProjectChange(projects, creator) {
	return {
		type: AppConstants.SET_PROJECT,
		projects,
		creator
	}
}

export function	onSortChange(sorting) {
	return {
		type: AppConstants.SET_SORTING,
		sorting
	}
}

export function	onFiltersReset(projects, creator, sorting) {
	return {
		type: AppConstants.FILTERS_RESET,
		projects,
		creator,
		sorting
	}
}

export function	addTask(task) {
	api.addTaskToApi(task);
	return {
		type: AppConstants.ADD_TASK,
	}
}
