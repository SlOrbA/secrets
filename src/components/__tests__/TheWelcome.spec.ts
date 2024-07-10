import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TheWelcome from '../TheWelcome.vue'; // Ensure this path matches the location of your component

describe('TheWelcome', () => {
  it('renders welcome message properly', () => {
    // Assuming TheWelcome component takes no props for displaying a default welcome message
    const wrapper = mount(TheWelcome);
    // Replace 'Welcome to Your Vue.js App' with the actual welcome message text you expect
    expect(wrapper.text()).toContain('Welcome to Your Vue.js App');
  });
})
