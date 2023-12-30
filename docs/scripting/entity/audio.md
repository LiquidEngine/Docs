---
sidebar_position: 900
---

# Audio

Rigid body API allows interacting with audio source component.

## Properties

### `isPlaying: boolean` *(readonly)* {#prop-isPlaying}

Check if audio is current playing.

```lua
local isPlaying = entity.audio.isPlaying
```

## Methods

### `play(): void` {#method-play}

Play audio that is defined in audio source component.

```lua
entity.audio:play()
```

### `delete(): void` {#method-delete}

Delete audio source component.

```lua
entity.audio:delete()
```
