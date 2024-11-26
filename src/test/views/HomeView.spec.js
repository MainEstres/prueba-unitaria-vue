import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import HomeView from "@/views/HomeView.vue";

describe('Componente HomeView', ()=>{
  test('Comparando snapshot', ()=>{

    const wrapper = shallowMount(HomeView);

    expect(wrapper.html()).toMatchSnapshot();


  })
})