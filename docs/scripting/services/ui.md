---
sidebar_position: 500
---

# UI

```lua
local ui = game:get('UI')
```

UI services provides utilities to create payload that can be sent to UI Canvas for rendering user interfaces.

## Flexbox

All the layout in UI Canvas is measured using [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox), which is typically used in browsers to create layouts for web applications. One powerful aspect or flexbox is that the entire layout can be measured in ratios that can automatically adjust to various screen sizes.

In this document, we are going to use the same nomeclature used in Flexbox to define the properties.

### Axes

When describing flexbox layout, there are two axis values that we need to consider -- Main Axis and Cross Axis:

- Main Axis: Main axis is the primary axis along which children are laid inside the container.
- Cross Axis: Cross axis is perpendicular to main axis.

## Components

Currently, there are three base components that are available from UI service.

### UIView

UIView is the base component to create containers. This element typically stores children and aligns them based on Flexbox system.

:::note

At the moment, **only** the layout is measured based on texts that are written from left to right.

:::

### UIText

UIText is a a component to render text.

### UIImage

UIIMage component is used to render images.

## Methods

### `view(props: UIViewProps): UIView` {#method-view}

Create UI View element.

```lua
local ui = game:get('UI')

local view = ui.view{
  children = {ui.view{}, ui.text{}, ui.image{}},
  style = {
    direction = "column",
    grow = 1,
    shrink = 0,
    justifyContent = "space-between",
    alignItems = "center",
    -- red
    backgroundColor = {1.0, 0.0, 0.0, 1.0},
  }
}
```

**Properties:**

- `children`: Children components. The components can be any element UI element -- UIView, UIImage, and UIText.
- `style`: Styles for UIView
  - `direction`: Defines **Main Axis** of the view. The following values are allowed:
    - `row` (default): Horizontal axis oriented from left to right.
    - `row-reverse`: Horizontal axis oriented from right to left.
    - `column`: Vertical axis oriented from top to bottom.
    - `column-reverse`: Vertical axis oriented from bottom to top.
  - `grow`: Defines how much of parent view's space in Main Axis should be assigned to this item's size. The value must be a non-negative numerical value. Default is `0.0`.
  - `shrink`: If the size of all children of this view's parent along the Main Axis is larger than parent's overall size, the items will shrink based on the Shrink factor. The value is a non-negative numerical value. Default is `1.0`. 
  - `justifyContent`: Defines how space around and between children are distributed along the Main Axis of the view. The following values are allowed:
    - `start` (default): Align children to the start of Main Axis.
    - `end`: Align children to the end of Main Axis.
    - `center`: Align children in the center of Main Axis.
    - `space-around`: Evenly align children across the Main Axis, distributing space around the children (i.e space before first item and space after last item) evenly.
    - `space-between`: Evenly align children across the Main Axis, distributing space between the children evenly.
    - `space-evenly`: Evenly align children across the Main Axis, distributing space both around and between the children evenly.
  - `alignItems`: Defines alignment of children along the Cross Axis.
    - `stretch` (default): Stretch children to match the dimension of the view's Cross Axis.
    - `start`: Align children to the start of Cross Axis.
    - `end`: Align children to the end of Cross Axis.
    - `center`: Align children in the center of Cross Axis.
    - `baseline`: Align children along a common baseline.
  - `backgroundColor`: Background color of the view. The value is defined as a table with four parameters -- R, G, B, A. Each component must be in range `[0.0, 1.0]`. Default value is `{0.0, 0.0, 0.0, 0.0}`.

### `text(props: UITextProps): UIText`

Creates UI Text element.

```lua
local ui = game:get('UI')

local text = ui.text{content="Hello world"}
```

**Properties:**

- `content`: Text content in string format.

### `image(props: UIImageProps): UIImage`

```lua
local texture = inputVars.register("Hearts", inputVars.types.AssetTexture)
local ui = game:get('UI')

local image = ui.image({ texture=texture })
```

**Properties:**

- `texture`: Image texture that accepts `AssetTexture`. You can provide the texture via [input variables](../variables/variables.md#var-type-asset-texture).
 