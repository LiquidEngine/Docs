---
sidebar_position: 5000
---

# Logger

```lua
local logger = game:get('Logger')
```

Logger service provides a way to log meaningful messages about the script. In editor, all logged messages are stored in the `Logs` tab:

![Logger](./img/logger.png)

:::tip Standard print function

The standard global `print` function is available without needing to load the Logger service. This function internally redirects all incoming messages to the debug channel (similar to `Logger.debug`):

```lua
print('This is a message', 12, myFunction, {hello="world"})
```

:::

## Methods

### `debug(...messages: any[]): void` {#method-debug}

Logs debug message

```lua
local logger = game:get("Logger")
logger.debug("This is a debug message", 12, myFunction, {hello="world"})
```

**Parameters:**

- `messages`: Log messages as any type

---

### `info(...messages: any[]): void` {#method-info}

Logs info message

```lua
local logger = game:get("Logger")
logger.debug("This is an info message", 12, myFunction, {hello="world"})
```

**Parameters:**

- `messages`: Log messages as any type

---

### `warning(...messages: any[]): void` {#method-warning}

Logs warning message

```lua
local logger = game:get("Logger")
logger.debug("This is a warning message", 12, myFunction, {hello="world"})
```

**Parameters:**

- `messages`: Log messages as any type

---

### `error(...messages: any[]): void` {#method-error}

Logs error message

```lua
local logger = game:get("Logger")
logger.debug("This is an error message", 12, myFunction, {hello="world"})
```

**Parameters:**

- `messages`: Log messages as any type

---

### `fatal(...messages: any[]): void` {#method-fatal}

Logs fatal message

```lua
local logger = game:get("Logger")
logger.debug("This is a fatal message", 12, myFunction, {hello="world"})
```

**Parameters:**

- `messages`: Log messages as any type
