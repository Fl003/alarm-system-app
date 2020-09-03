import { writable } from 'svelte/store';

/*for Keytag & NFC*/
export const signal = writable(false);

/*for the guide*/
export const guidecount = writable(1);