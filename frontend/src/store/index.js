import { configureStore } from '@reduxjs/toolkit';
import auth from './authSlice';
<<<<<<< HEAD
import activate from './activateSlice';
=======
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973

export const store = configureStore({
    reducer: {
        auth,
<<<<<<< HEAD
        activate,
    },
});
=======
    },
  })
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
