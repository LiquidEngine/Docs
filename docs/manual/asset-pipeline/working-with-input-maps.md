# Working with input maps

:::note WIP Input Map UI

Current priority of the engine is to provide a table based UI to define the input commands, bindings, and schemes. In the meantime, you can use the input map by modifying the YAML file directly.

:::

## What are input maps?

Input map is a custom asset type that is used to map raw system inputs to logical commands. Input maps consist of three sets of elements -- schemes, commands, and bindings. Example:

```yaml
schemes:
  - name: Explore
  - name: Combat
commands:
  - name: Move
    data: axis-2d
  - name: Hit
    data: boolean
  - name: Pick
    data: boolean
bindings:
  - scheme: 0
    command: 2
    binding: MOUSE_LEFT
  - scheme: 1
    command: 3
    binding: MOUSE_LEFT
  - scheme: 0
    command: 0
    binding:
      x: [KEY_A, KEY_D]
      y: [KEY_W, KEY_S]
  - scheme: 0
    command: 0
    binding:
      x: GAMEPAD_LEFT_X
      y: GAMEPAD_LEFT_Y
```

## Commands

Commands are logical representations of commands that developer intends to do based on commands. Commands contain two properties: Name and data type.

- **Name:** Unique name of the command. Command names are used to find the needed command from scripts to retrieve input operation.
- **Data type:** Data type represents what value the command stores given input.

### Data types

There are three types of commands that exist in the input system:

- boolean: Represent true/false value. Useful to check whether a key is pressed
- axis-1d: Represents axis in one direction between [-1.0, 1.0]. Gamepad thumbsticks are one-dimensional. axis
- axis-2d: Represents x and y axes as two axis-1d values.

Note that, the command types can only be `boolean` and `axis-2d` but each input key represents one of the three values.

## Schemes

Schemes provide additional dimension to bindings. The main purpose of scheme is to map the same binding to more than one command. This is useful when we want to perform different actions depending on some specific trigger. The scheme data is very generic and one can perform mappings depending on their use-case. For example, you can use schemes to separate between gamepad and keyboard/mouse by storing bindings for each input type in different schemes. You can also use schemes to trigger between different command sets. For example, you can choose between shooting arrow vs meleeing, depending on "arrow drawn" command being executed.

The input map **must always have** at least one scheme available.

## Bindings

Bindings provide a mapping between input keys and the logical commands that we provide. A typical binding is stored in the following way:

```yaml
- scheme: 0
  command: 0
  binding:
    x: GAMEPAD_LEFT_X
    y: GAMEPAD_LEFT_Y
```

A binding must reference the scheme and the command stored in the input map asset.

## Binding values

The binding value differs depending on the command data type.

### Axis 2D

Axis 2D values can be defined in three ways:

**Passing Axis 2D key directly:**

```yaml
binding: MOUSE_MOVE
```

`MOUSE_MOVE` is an Axis 2D key; so, we can directly pass it to a binding that references `axis-2d` command.

**Passing Axis 1D key to each axis separately:**

```yaml
binding:
  x: GAMEPAD_LEFT_X
  y: GAMEPAD_LEFT_Y
```

`GAMEPAD_LEFT_X/Y` are Axis 1D keys; so, you can pass each one to a different axis of a binding that references `axis-2d` command.

**Passing boolean keys to each _segment_ of each axis:**

```yaml
binding:
  x: [KEY_A, KEY_D]
  y: [KEY_W, KEY_S]
```

`KEY_A/D/W/S` are boolean keys; so, they can be passed to represent each end of an axis. In the example above, pressing the keys will result in fixed values:

| axis | key   | value on press | direction |
| ---- | ----- | -------------- | --------- |
| x    | KEY_A | -1.0           | left      |
| x    | KEY_D | 1.0            | right     |
| y    | KEY_W | -1.0           | top       |
| y    | KEY_S | 1.0            | bottom    |

Having top as -1.0 might seem unintuitive at first but it is designed with to map to gamepad keys vis-a-vis, which makes it easier to provide both bindings for the same command:

```yaml
schemes:
  - name: Default

commands:
  - name: Move
    type: axis-2d

bindings:
  - scheme: 0
    command: 0
    binding:
      x: [KEY_A, KEY_D]
      y: [KEY_W, KEY_S]
  - scheme: 0
    command: 0
    binding:
      x: GAMEPAD_LEFT_X
      y: GAMEPAD_LEFT_Y
```

In the example above pressing 'W' or moving the left thumbstick to top provides negative values in y direction. Pressing 'D' or moving the left thumbstick to right, provides positive values in x direction.

## Key bindings

Here is the table for all the supported keys:

**Keyboard:**

| Key string        | Representation    | Type    |
| ----------------- | ----------------- | ------- |
| KEY\_[A-Z]        | [A-Z]             | Boolean |
| KEY\_[0-9]        | [0-9]             | Boolean |
| KEY_COMMA         | `,`               | Boolean |
| KEY_MINUS         | `-`               | Boolean |
| KEY_PERIOD        | `.`               | Boolean |
| KEY_SLASH         | `/`               | Boolean |
| KEY_SEMICOLON     | `;`               | Boolean |
| KEY_EQUAL         | `=`               | Boolean |
| KEY_LEFT_BRACKET  | `[`               | Boolean |
| KEY_BACKSLASH     | `\`               | Boolean |
| KEY_RIGHT_BRACKET | `]`               | Boolean |
| KEY_GRAVE_ACCENT  | `\``              | Boolean |
| KEY_SPACE         | Spacebar          | Boolean |
| KEY_ESCAPE        | Escape            | Boolean |
| KEY_ENTER         | Enter             | Boolean |
| KEY_TAB           | Tab               | Boolean |
| KEY_BACKSPACE     | Backspace         | Boolean |
| KEY_INSERT        | Insert key        | Boolean |
| KEY_DELETE        | Delete key        | Boolean |
| KEY_RIGHT         | Right arrow       | Boolean |
| KEY_LEFT          | Left arrow        | Boolean |
| KEY_DOWN          | Down arrow        | Boolean |
| KEY_UP            | Up arrow          | Boolean |
| KEY_PAGE_UP       | Page up           | Boolean |
| KEY_PAGE_DOWN     | Page down         | Boolean |
| KEY_HOME          | Home              | Boolean |
| KEY_END           | End               | Boolean |
| KEY_CAPS_LOCK     | Caps lock         | Boolean |
| KEY_SCROLL_LOCK   | Scroll lock       | Boolean |
| KEY_NUM_LOCK      | Num lock          | Boolean |
| KEY_PRINT_SCREEN  | Print screen      | Boolean |
| KEY_PAUSE         | Pause             | Boolean |
| KEY_LEFT_SHIFT    | Left shift        | Boolean |
| KEY_LEFT_CONTROL  | Left control      | Boolean |
| KEY_LEFT_ALT      | Left alt          | Boolean |
| KEY_LEFT_SUPER    | Left Win/CMD key  | Boolean |
| KEY_RIGHT_SHIFT   | Right shift       | Boolean |
| KEY_RIGHT_CONTROL | Right control     | Boolean |
| KEY_RIGHT_ALT     | Right alt         | Boolean |
| KEY_RIGHT_SUPER   | Right Win/CMD key | Boolean |

**Mouse:**

| Key string   | Representation      | Type    |
| ------------ | ------------------- | ------- |
| MOUSE_LEFT   | Left mouse button   | Boolean |
| MOUSE_RIGHT  | Right mouse button  | Boolean |
| MOUSE_MIDDLE | Middle mouse button | Boolean |
| MOUSE_MOVE   | Mouse movement      | Axis 2D |

**Gamepad:**

| Key string            | Xbox                        | Dualshock/sense             | Type    |
| --------------------- | --------------------------- | --------------------------- | ------- |
| GAMEPAD_SOUTH         | A                           | Cross (X)                   | Boolean |
| GAMEPAD_EAST          | B                           | Circle                      | Boolean |
| GAMEPAD_WEST          | X                           | Square                      | Boolean |
| GAMEPAD_NORTH         | Y                           | Triangle                    | Boolean |
| GAMEPAD_BUMPER_LEFT   | LB                          | L1                          | Boolean |
| GAMEPAD_BUMPER_RIGHT  | RB                          | R1                          | Boolean |
| GAMEPAD_TRIGGER_LEFT  | LT                          | L2                          | Boolean |
| GAMEPAD_TRIGGER_RIGHT | RT                          | R2                          | Boolean |
| GAMEPAD_THUMB_LEFT    | LSB                         | L3 / LSB                    | Boolean |
| GAMEPAD_THUMB_RIGHT   | RSB                         | R3 / RSB                    | Boolean |
| GAMEPAD_DPAD_UP       | Dpad up                     | Dpad up                     | Boolean |
| GAMEPAD_DPAD_RIGHT    | Dpad right                  | Dpad right                  | Boolean |
| GAMEPAD_DPAD_LEFT     | Dpad left                   | Dpad left                   | Boolean |
| GAMEPAD_DPAD_DOWN     | Dpad down                   | Dpad down                   | Boolean |
| GAMEPAD_LEFT_X        | Left thumbstick horizontal  | Left thumbstick horizontal  | Axis 1D |
| GAMEPAD_LEFT_Y        | Left thumbstick vertical    | Left thumbstick vertical    | Axis 1D |
| GAMEPAD_RIGHT_Y       | Right thumbstick horizontal | Right thumbstick horizontal | Axis 1D |
| GAMEPAD_RIGHT_Y       | Right thumbstick vertical   | Right thumbstick vertical   | Axis 1D |
| GAMEPAD_START         | Start button                | Start button                | Axis 1D |
| GAMEPAD_BACK          | Back button                 | Back button                 | Axis 1D |
