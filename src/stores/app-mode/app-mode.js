import { writable } from 'svelte/store';
import { AppMode } from './../../domain/models/app-mode.js';

export const appModeStore = writable(new AppMode(AppMode.MODE_NORMAL));