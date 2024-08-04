import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SlideData } from "mainTypes";

interface SliderState {
    activeIndex: number;
    sliderSlides: SlideData[];
}

const initialState: SliderState = {
    activeIndex: 0,
    sliderSlides: [],
}

const sliderSlice = createSlice({
    name: 'slider', 
    initialState,
    reducers: {
setActiveIndex: (state, action: PayloadAction<number>)=>{
    state.activeIndex = action.payload
},
setSliderData: (state, action: PayloadAction<SliderState['sliderSlides']>) =>{
state.sliderSlides = action.payload
}
    }
})

export const {setActiveIndex, setSliderData} = sliderSlice.actions

export default sliderSlice.reducer