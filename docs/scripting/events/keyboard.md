# Keyboard

Keyboard events are triggered when specific keys are pressed by the user.

## Reference

### `on_key_press(event: KeyEvent): void` {#on_key_press}

This event is triggered when any key is pressed by the user.

```lua
function on_key_press(event)
  key = event.key
  mods = event.mods
end
```

**Parameters:**

- `event.key`: Value of the pressed key. The value is a numeric and is based on [GLFW key values](https://www.glfw.org/docs/latest/group__keys.html).
- `event.mods`: Value of the modifier key (e.g Shift) pressed with the key. The value is a numeric and is based on [GLFW modifier flags](https://www.glfw.org/docs/latest/group__mods.html).

### `on_key_release(event: KeyEvent): void` {#on_key_released}

This event is triggered when any key is released by the user.

```lua
function on_key_press(event)
  key = event.key
  mods = event.mods
end
```

**Parameters:**

- `event.key`: Value of the released key. The value is a numeric and is based on [GLFW key values](https://www.glfw.org/docs/latest/group__keys.html).
- `event.mods`: Value of the modifier key (e.g Shift) released with the key. The value is a numeric and is based on [GLFW modifier flags](https://www.glfw.org/docs/latest/group__mods.html).
