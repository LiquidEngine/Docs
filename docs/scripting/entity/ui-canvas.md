---
sidebar_position: 1100
---

# UI Canvas

UI Canvas allows rendering UI elements into UI Canvas component.

## Methods

## `render(view: UIView): void` {#method-render}

Render view into UI Canvas.

```lua
local ui = game:get('UI')

entity.uiCanvas:render(ui.view{
  children={ui.text{content="Hello world"}}
})
```

**Properties:**

- `view`: UIView element that can be created in the [UI service](../services/ui.md).
