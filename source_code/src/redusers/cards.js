if (!localStorage.getItem('cards')) {
  localStorage.setItem('cards', JSON.stringify([]));
}

let initialState = localStorage.getItem('cards');

export default function cardList(state = JSON.parse(initialState), action) {
  switch (action.type) {
    case 'ADD_CARD':
      state = [...state,
        action.payload
      ];

      localStorage.setItem('cards', JSON.stringify(state));

      return state;

    case 'INFO_CHANGE_CARD':
      for (let i = 0; i < state.length; i += 1) {
        if (action.payload.id === state[i].id) {
          state[i].title = action.payload.title;
          state[i].description = action.payload.description;
        }
      }

      localStorage.setItem('cards', JSON.stringify(state));
      return state;

    case 'LIKE_CARD':
      for (let i = 0; i < state.length; i += 1) {
        if (action.payload.id === state[i].id) {
          state[i].like = action.payload.like;
        }
      }

      localStorage.setItem('cards', JSON.stringify(state));
      return state;

    case 'DELETE_CARD':
      for (let i = 0; i < state.length; i += 1) {
        if (action.payload === state[i].id) {
          state.splice(i, 1);
        }
      }

      localStorage.setItem('cards', JSON.stringify(state));
      return state;

    default:
      return state;
  }
}