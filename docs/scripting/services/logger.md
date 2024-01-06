---
sidebar_position: 5000
---

# Logger

```lua
local logger = game:get('Logger')
```

Logger service provides a way to log meaningful messages about the script. In editor, all logged messages are stored in the `Logs` tab:

![Logger](./img/logger.png)

## Methods

### `debug(message: string): void` {#method-debug}

Logs debug message

```lua
local logger = game:get("Logger")
logger.debug("This is a debug message")
```

**Parameters:**

- `message`: Log message as string.

---

### `info(message: string): void` {#method-info}

Logs info message

```lua
local logger = game:get("Logger")
logger.info("This is an info message")
```

**Parameters:**

- `message`: Log message as string.

---

### `warning(message: string): void` {#method-warning}

Logs warning message

```lua
local logger = game:get("Logger")
logger.warning("This is a warning message")
```

**Parameters:**

- `message`: Log message as string.

---

### `error(message: string): void` {#method-error}

Logs error message

```lua
local logger = game:get("Logger")
logger.debug("This is an error message")
```

**Parameters:**

- `message`: Log message as string.

---

### `fatal(message: string): void` {#method-fatal}

Logs fatal message

```lua
local logger = game:get("Logger")
logger.debug("This is a fatal message")
```

**Parameters:**

- `message`: Log message as string.
