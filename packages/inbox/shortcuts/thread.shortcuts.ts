import { defineShortcutScope } from '@plannotator/ui/shortcuts';

/**
 * The thread's keys (App.tsx): Archive and the toast's Undo. Bare letters,
 * so never while typing, in a dialog, menu or list, or in an open file
 * (guards.ts and the handler's `when`).
 */
export const inboxThreadShortcuts = defineShortcutScope({
  id: 'inbox-thread',
  title: 'Thread',
  shortcuts: {
    archive: {
      description: 'Archive thread',
      bindings: ['E'],
      section: 'Threads',
      hint: 'The row the keyboard is on, else the open thread. Z undoes while the toast is up.',
      preventDefault: true,
      displayOrder: 0,
    },
    undo: {
      description: 'Undo what the toast offers',
      bindings: ['Z'],
      section: 'Threads',
      hint: 'While the toast shows Undo.',
      preventDefault: true,
      displayOrder: 1,
    },
  },
});
