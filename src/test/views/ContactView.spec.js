import { mount } from "@vue/test-utils";
import ContactView from "@/views/ContactView.vue";
import { createRouter, createWebHistory } from "vue-router";
import { describe, expect, test } from "vitest";

describe('ContactView', () => {
    test('Probando la existencia del componente o vista ContactView ', async () => {
      const router = createRouter({
        history: createWebHistory(),
        routes: [
          {
            path: '/contact',
            name: 'ContactViewVue',
            component: ContactView,
          },
        ],
      })
      
      router.push('/contact')
      await router.isReady()
      const wrapper = mount(ContactView, {
        global: {
          plugins: [router],
        },
      })
      expect(wrapper.findComponent(ContactView).exists()).toBe(true)
    })
  })