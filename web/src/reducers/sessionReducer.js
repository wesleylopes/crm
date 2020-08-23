import * as actionTypes from 'actions';

const initialState = {
  loggedIn: true,
  user: {
    first_name: 'Wesley',
    last_name: 'Lopes',
    email: 'wesley@saib.com.br',
    avatar: '/images/avatars/avatar_wesley_lopes.png',
    bio: 'Programador',
    role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
  }
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SESSION_LOGIN: {
      return {
        ...initialState
      };
    }

    case actionTypes.SESSION_LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: {
          role: 'ADMIN'
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;
