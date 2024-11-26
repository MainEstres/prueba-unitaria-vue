import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import About from "../About.vue";

describe('Componente About', ()=>{
  test('Comparando snapshot', ()=>{

    const wrapper = shallowMount(About);

    expect(wrapper.html()).toMatchSnapshot();


  })
})