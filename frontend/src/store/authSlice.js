<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';
=======
import { createSlice } from '@reduxjs/toolkit'
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973

const initialState = {
    isAuth: false,
    user: null,
<<<<<<< HEAD
    otp: {
        phone: '',
        hash: '',
=======
  otp: {
    phone: '',
    hash:'',
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
    },
};

export const authSlice = createSlice({
<<<<<<< HEAD
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            const { user } = action.payload;
            state.user = user;
            state.isAuth = true;
        },
        setOtp: (state, action) => {
            const { phone, hash } = action.payload;
            state.otp.phone = phone;
            state.otp.hash = hash;
        },
    },
});

export const { setAuth, setOtp } = authSlice.actions;

export default authSlice.reducer;
=======
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state,action) => {
      const { user } = action.payload;
      state.user = user;
     state. isAuth = true;
    },
    setOtp:(state,action)=>{
      const { phone, hash } = action.payload;
      state.otp.phone = phone;
      state.otp.hash = hash;
    },
  },
})


export const { setAuth,setOtp } = authSlice.actions;

export default authSlice.reducer
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
