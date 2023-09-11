---
sidebar_position: 9
---

# Audio

Rigid body API allows interacting with audio source component.

## Reference

### `play(): void` {#play}

Play audio that is defined in audio source component.

```lua
entity.audio:play()
```

### `is_playing(): boolean` {#is_playing}

Check if audio is current playing.

```lua
is_playing = entity.audio:is_playing()
```

**Returns:**

If audio is playing, return `true`. If audio is not playing, return `false`.

### `delete(): void` {#delete}

Delete audio source component.

```lua
entity.audio:delete()
```
